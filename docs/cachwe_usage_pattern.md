# Padrão de Uso do Cache no Projeto

Este documento especifica o padrão correto de uso do cache conforme as regras do Next.js 16 e as diretrizes do projeto.

## Regras Fundamentais

1. **`cacheTag()` só pode ser chamado dentro de funções com a diretiva `"use cache"`**
2. **Dados não cacheados devem ser acessados apenas dentro de `<Suspense>`**
3. **`auth()` nunca deve ser chamado dentro de funções com `"use cache"`**

## Estrutura Padrão

### 1. Funções Cached (com `"use cache"`)

Funções que fazem cache de dados devem:

- Ter a diretiva `"use cache"` como primeira linha após a assinatura
- Usar `cacheTag()` para marcar os dados com tags
- **NUNCA** usar `auth()` diretamente
- Receber `userId` como parâmetro quando necessário

```typescript
export async function getCurrentUserCached(
  userId: string,
): Promise<GetCurrentUserResult> {
  "use cache";

  try {
    cacheTag("users");
    cacheTag(`user-${userId}`);

    // Buscar dados do usuário via API
    const response = await serverApi.get(`/users/${userId}`, {
      ...(userId && ({ userId } as any)),
    });

    return response.data;
  } catch (error) {
    // ... tratamento de erro
  }
}
```

### 2. Funções Wrapper (sem `"use cache"`)

Funções que obtêm dados do usuário autenticado devem:

- Obter `userId` via `auth()` **FORA** de funções cached
- Chamar a função cached passando `userId` como parâmetro
- Não usar `cacheTag()` diretamente

```typescript
export async function getCurrentUser(): Promise<GetCurrentUserResult> {
  // ✅ CORRETO: Obter userId FORA de "use cache"
  const { userId } = await auth();

  if (!userId) {
    return {
      success: false,
      error: "Usuário não autenticado",
    };
  }

  // ✅ CORRETO: Passar userId para função cached
  return getCurrentUserCached(userId);
}
```

## Padrão Completo

### Exemplo: Buscar Endereços

```typescript
// ✅ Função cached - recebe userId como parâmetro
async function getAddressesCached(userId: string): Promise<AddressesResult> {
  "use cache";

  try {
    cacheTag("addresses");
    cacheTag(`addresses-${userId}`);

    // Usar userId passado como parâmetro
    const response = await serverApi.get(`/addresses?userId=${userId}`, {
      ...(userId && ({ userId } as any)),
    });

    return response.data;
  } catch (error) {
    return {
      success: false,
      error: "Erro ao buscar endereços",
    };
  }
}

// ✅ Função wrapper - obtém userId via auth() e chama função cached
export async function getAddresses(): Promise<AddressesResult> {
  // Obter userId FORA de "use cache"
  const { userId } = await auth();

  if (!userId) {
    return { success: false, error: "Usuário não autenticado" };
  }

  // Passar userId para função cached
  return getAddressesCached(userId);
}
```

## ❌ Padrões Incorretos

### ❌ ERRADO: Usar auth() dentro de "use cache"

```typescript
// ❌ ERRADO: Não fazer isso
async function getAddressesCached(): Promise<AddressesResult> {
  "use cache";

  // ❌ Isso causa erro: Route used `headers()` inside "use cache"
  const { userId } = await auth();

  cacheTag("addresses");
  // ...
}
```

### ❌ ERRADO: Usar cacheTag() sem "use cache"

```typescript
// ❌ ERRADO: Não fazer isso
async function getAddresses(userId: string): Promise<AddressesResult> {
  // ❌ Erro: cacheTag() can only be called inside a "use cache" function
  cacheTag("addresses");

  // ...
}
```

## Checklist de Implementação

Ao criar ou modificar uma função cached:

- [ ] A função tem `"use cache"` como primeira linha após a assinatura?
- [ ] A função recebe `userId` como parâmetro (se necessário)?
- [ ] A função **NÃO** usa `auth()` diretamente?
- [ ] A função usa `cacheTag()` para marcar os dados?
- [ ] Existe uma função wrapper que obtém `userId` via `auth()` e chama a função cached?

## Tags de Cache Utilizadas

| Tag                  | Descrição                                | Onde é Usada          |
| -------------------- | ---------------------------------------- | --------------------- |
| `users`              | Tag geral para usuários                  | Actions de usuários   |
| `user-{id}`          | Tag específica para um usuário           | Busca por ID          |
| `produtos`           | Tag geral para produtos                  | Actions de produtos   |
| `product-{id}`       | Tag específica para um produto           | Busca por ID/Slug     |
| `categories`         | Tag geral para categorias                | Actions de categorias |
| `category-{id}`      | Tag específica para uma categoria        | Busca por ID/Slug     |
| `orders`             | Tag geral para pedidos                   | Actions de pedidos    |
| `order-{id}`         | Tag específica para um pedido            | Busca por ID          |
| `cashback`           | Tag geral para cashback                  | Actions de cashback   |
| `cashback-{userId}`  | Tag específica para cashback do usuário  | Busca por userId      |
| `addresses`          | Tag geral para endereços                 | Actions de endereços  |
| `addresses-{userId}` | Tag específica para endereços do usuário | Busca por userId      |

## Revalidação

Após operações de CRUD, revalidar as tags relacionadas:

```typescript
import { revalidateTag } from "next/cache";

// Revalidar todas as entradas relacionadas
revalidateTag("users", "max");
revalidateTag(`user-${userId}`, "max");
```

## Erro Comum: "Uncached data was accessed outside of <Suspense>"

### Causa

Este erro ocorre quando dados não cacheados são acessados fora de um boundary `<Suspense>`.

### Solução

Todas as páginas e componentes que acessam `params` ou `searchParams` devem estar envolvidos por `<Suspense>`:

```typescript
// ✅ CORRETO
export default function Page({ params, searchParams }) {
  return (
    <Suspense fallback={<Loading />}>
      <PageContent params={params} searchParams={searchParams} />
    </Suspense>
  );
}

async function PageContent({ params, searchParams }) {
  const { userId } = await params;
  const data = await searchParams;
  // ... resto do código
}
```

### Layout com Suspense

Layouts também devem envolver componentes assíncronos com Suspense:

```typescript
export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html>
        <body>
          <Suspense fallback={null}>
            <ClerkContent>{children}</ClerkContent>
          </Suspense>
        </body>
      </html>
    </ClerkProvider>
  );
}
```

## Referências

- [Next.js 16 Cache Documentation](https://nextjs.org/docs/app/building-your-application/caching)
- [Next.js Blocking Route Error](https://nextjs.org/docs/messages/blocking-route)
- [REGRA_CONSOLIDADA.mdc - Next.js 16 - Sistema de Cache](./REGRA_CONSOLIDADA.mdc#nextjs-16---sistema-de-cache)

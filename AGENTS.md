# AGENTS.md

Guia de colaboração para agentes e contribuidores deste projeto.

## Objetivo
- Manter e evoluir o portfólio com foco em qualidade visual, acessibilidade, performance e consistência de código.

## Stack do projeto
- Next.js (App Router)
- React + TypeScript
- Tailwind CSS
- Sanity (CMS)

## Estrutura principal
- `src/app`: rotas, layout e páginas
- `src/sections`: seções reutilizáveis da interface
- `src/components`: componentes compartilhados
- `sanity/`: schemas e configuração do CMS
- `docs/`: documentação de apoio

## Regras de implementação
- Preferir componentes pequenos, legíveis e reutilizáveis.
- Manter tipagem estrita em TypeScript, evitando `any` sem justificativa.
- Seguir padrões já existentes no projeto antes de introduzir novos.
- Evitar mudanças não relacionadas ao escopo da tarefa.
- Preservar responsividade (mobile-first) e acessibilidade básica (semântica, `alt`, contraste e foco).

## Qualidade e validação
- Antes de concluir alterações, executar (quando aplicável):
  - `yarn lint`
  - `yarn build`
- Corrigir erros e warnings relevantes introduzidos pela alteração.

## Política de commits (obrigatória)
- **Todo commit deve começar com um prefixo válido**, no padrão:
  - `<prefixo>: <short description>`
- **A mensagem do commit deve ser escrita em inglês.**
- Prefixos aceitos:
  - `feat`: nova funcionalidade
  - `fix`: correção de bug
  - `refact`: refatoração sem mudança funcional
  - `style`: ajustes visuais/estilo/formatação
  - `docs`: documentação
  - `chore`: tarefas de manutenção (build, deps, config, tooling)
  - `test`: criação/ajuste de testes
  - `perf`: melhoria de performance
  - `ci`: mudanças de integração/entrega contínua
- Exemplos:
  - `feat: add services section to homepage`
  - `fix: correct hero alignment on small screens`
  - `docs: update setup instructions in README`

## Pull Requests
- Descrever objetivo da mudança com clareza.
- Listar impacto visual/funcional.
- Incluir evidências quando necessário (prints, vídeos curtos, ou passos de validação).
- Garantir que o PR esteja focado em um único problema/tarefa.

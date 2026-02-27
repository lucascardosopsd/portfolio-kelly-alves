export default {
  name: "workLocation",
  type: "document",
  title: "Local de Trabalho",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Nome do Local",
      validation: (rule: { required: () => unknown }) => rule.required(),
    },
    {
      name: "fullAddress",
      type: "text",
      title: "Endereço por Extenso",
      description: "Ex: Rua X, 123 - Bairro, Cidade - Estado, CEP 00000-000.",
      rows: 3,
      validation: (rule: { required: () => { error: (message: string) => unknown } }) =>
        rule.required().error("Preencha o endereço por extenso."),
    },
    {
      name: "serviceHours",
      type: "text",
      title: "Horários de Atendimento",
      description: "Escreva os horários por extenso. Ex: Segunda a Sexta, das 09h às 18h.",
      rows: 4,
      validation: (rule: { required: () => { error: (message: string) => unknown } }) =>
        rule.required().error("Preencha os horários de atendimento."),
    },
    {
      name: "mapsLink",
      type: "url",
      title: "Link do Maps",
      validation: (rule: {
        required: () => { uri: (config: { scheme: string[] }) => unknown };
      }) => rule.required().uri({ scheme: ["http", "https"] }),
    },
    {
      name: "mapsImage",
      type: "image",
      title: "Imagem do Maps",
      description: "Imagem do local para ser clicável junto com o link do Maps.",
      options: {
        hotspot: true,
      },
      validation: (rule: { required: () => unknown }) => rule.required(),
    },
  ],
};

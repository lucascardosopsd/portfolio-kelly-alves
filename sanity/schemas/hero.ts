export default {
  name: "hero",
  type: "document",
  title: "Cabeçalho",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Título",
    },
    {
      name: "subTitle",
      type: "string",
      title: "Sub Título",
    },
    {
      name: "highlights",
      title: "Destaques",
      type: "array",
      of: [
        {
          type: "object",
          name: "highlight",
          title: "Destaque",
          fields: [
            {
              name: "title",
              title: "Título",
              type: "string",
            },
            {
              name: "subTitle",
              title: "Sub Título",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
};

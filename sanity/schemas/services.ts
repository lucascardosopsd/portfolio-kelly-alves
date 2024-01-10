export default {
  name: "serviceCategories",
  type: "document",
  title: "Categorias de Serviços",
  fields: [
    {
      name: "order",
      type: "number",
      title: "Posição",
    },
    {
      name: "categoryName",
      type: "string",
      title: "Nome",
    },
    {
      name: "categoryServices",
      title: "Serviços",
      type: "array",
      of: [
        {
          name: "categoryService",
          type: "object",
          title: "Serviço",
          fields: [
            {
              name: "order",
              type: "number",
              title: "Posição",
            },
            {
              name: "title",
              type: "string",
              title: "Título",
            },
            {
              name: "description",
              type: "string",
              title: "Descrição",
            },
            {
              name: "mainImage",
              type: "image",
              title: "Imagem Principal",
            },
            {
              name: "secondaryImage",
              type: "image",
              title: "Imagem Secundária",
            },
          ],
        },
      ],
    },
  ],

  initialValue: {
    order: 0,
  },
};

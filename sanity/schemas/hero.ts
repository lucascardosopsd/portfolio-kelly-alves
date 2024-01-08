export default {
  name: "hero",
  type: "document",
  title: "Cabeçalho",
  fields: [
    {
      name: "greeting",
      title: "Saudação",
      type: "object",
      fields: [
        {
          title: "Português",
          name: "pt",
          type: "string",
        },
        {
          title: "Inglês",
          name: "en",
          type: "string",
        },
      ],
    },

    {
      name: "title",
      title: "Título",
      type: "object",
      fields: [
        {
          title: "Português",
          name: "pt",
          type: "string",
        },
        {
          title: "Inglês",
          name: "en",
          type: "string",
        },
      ],
    },

    {
      name: "subtitle",
      title: "Sub Título",
      type: "object",
      fields: [
        {
          title: "Português",
          name: "pt",
          type: "string",
        },
        {
          title: "Inglês",
          name: "en",
          type: "string",
        },
      ],
    },

    {
      name: "pic",
      type: "image",
      title: "Foto",
    },
  ],
};

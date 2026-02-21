export default {
  name: "profile",
  type: "document",
  title: "Perfil",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Nome",
    },
    {
      name: "phone",
      type: "string",
      title: "Telefone",
    },
    {
      name: "instagramUrl",
      type: "string",
      title: "Link do instagram",
    },
    {
      name: "facebookUrl",
      type: "string",
      title: "Link do facebook",
    },
    {
      name: "whatsappUrl",
      type: "string",
      title: "Link do whatsapp",
    },
    {
      name: "address",
      type: "string",
      title: "Endereço",
    },
    {
      name: "hours",
      type: "string",
      title: "Horários",
    },
    {
      name: "motto",
      type: "string",
      title: "Lema",
    },
    {
      name: "bio",
      type: "array",
      of: [{ type: "block" }],
      title: "Bio",
    },
    {
      name: "pics",
      title: "Fotos",
      type: "array",
      of: [
        {
          name: "pic",
          type: "object",
          title: "Foto",
          fields: [
            {
              name: "name",
              type: "string",
              title: "Nome do Arquivo",
            },
            {
              name: "file",
              type: "image",
              title: "Arquivo",
            },
          ],
        },
      ],
    },
  ],
};

export default {
  name: "ratings",
  type: "document",
  title: "Avaliações",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Nome Da Cliente",
    },
    {
      name: "testimonyTitle",
      type: "string",
      title: "Depoimento",
    },
    {
      name: "testimonyText",
      type: "string",
      title: "Depoimento",
    },
    {
      name: "clientPic",
      type: "image",
      title: "Foto da Cliente",
    },
  ],
};

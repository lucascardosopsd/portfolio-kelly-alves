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
      name: "testimony",
      type: "string",
      title: "Depoimento",
    },
    {
      name: "clientPic",
      type: "image",
      title: "Foto da Cliente",
    },
    {
      name: "instagram",
      type: "string",
      title: "Instagram",
    },
  ],
};

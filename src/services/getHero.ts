import { client } from "../../sanity/lib/client";

export const getHero = async () => {
  const query = `
    *[_type == "hero"]{
        title,
        subTitle,
        highlights
    }
    `;

  return await client.fetch(query);
};

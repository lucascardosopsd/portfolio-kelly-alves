import { client } from "../../sanity/lib/client";

export const getHero = async () => {
  const query = `
    *[_type == "hero"]{
        greeting,
        title,
        subtitle,
        pic{
          asset -> {
            url
          }
        }
    }
    `;

  return await client.fetch(query);
};

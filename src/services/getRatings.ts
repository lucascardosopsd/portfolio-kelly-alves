import { client } from "../../sanity/lib/client";

export const getRatings = async () => {
  const query = `
    *[_type == "ratings"]{
        name,
        testimonyTitle,
        testimonyText,
        "clientPic": clientPic.asset->url,
    }
    `;

  return await client.fetch(query);
};

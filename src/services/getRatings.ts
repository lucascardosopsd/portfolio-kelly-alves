import { client } from "../../sanity/lib/client";

export const getRatings = async () => {
  const query = `
    *[_type == "ratings"]{
        name,
        testimony,
        instagram,
        "clientPic": clientPic.asset->url,
    }
    `;

  return await client.fetch(query);
};

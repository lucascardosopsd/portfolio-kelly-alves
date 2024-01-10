import { client } from "../../sanity/lib/client";

export const getResults = async () => {
  const query = `
    *[_type == "results"]{
        title,
        "beforePic": beforePic.asset->url,
        "afterPic": afterPic.asset->url
    }
    `;

  return await client.fetch(query);
};

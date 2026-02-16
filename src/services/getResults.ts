import { cacheTag } from 'next/cache';
import { client } from "../../sanity/lib/client";

export const getResults = async () => {
  'use cache'
  cacheTag('results')

  const query = `
    *[_type == "results"]{
        title,
        "beforePic": beforePic.asset->url,
        "afterPic": afterPic.asset->url
    }
    `;

  return await client.fetch(query);
};

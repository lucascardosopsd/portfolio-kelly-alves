import { cacheTag } from 'next/cache';
import { client } from "../../sanity/lib/client";

export const getRatings = async () => {
  'use cache'
  cacheTag('ratings')

  const query = `
    *[_type == "ratings"]{
        name,
        testimony,
        instagram,
        "clientPic": clientPic.asset->url
    }
    `;

  return await client.fetch(query);
};

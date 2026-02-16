import { cacheTag } from 'next/cache';
import { client } from "../../sanity/lib/client";

export const getHero = async () => {
  'use cache'
  cacheTag('hero')

  const query = `
    *[_type == "hero"]{
        title,
        subTitle,
        highlights
    }
    `;

  return await client.fetch(query);
};

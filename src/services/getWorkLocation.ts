import { cacheTag } from 'next/cache';
import { WorkLocationProps } from "@/types/workLocation";
import { client } from "../../sanity/lib/client";

export const getWorkLocation = async () => {
  'use cache'
  cacheTag('workLocation')

  const query = `
    *[_type == "workLocation"]{
      name,
      fullAddress,
      serviceHours,
      mapsLink,
      "mapsImage": mapsImage.asset->url
    }
  `;

  return (await client.fetch(query)) as WorkLocationProps[];
};

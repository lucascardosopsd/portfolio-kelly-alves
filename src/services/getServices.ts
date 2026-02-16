import { cacheTag } from 'next/cache';
import { ServiceCategory } from "@/types/serviceCategory";
import { client } from "../../sanity/lib/client";

export const getServices = async () => {
  'use cache'
  cacheTag('services')

  const query = `
  *[_type == "serviceCategories"] {
    order,
    categoryName,
    categoryServices[]{
      order,
      title,
      description,
      "mainImage": mainImage.asset->url,
      "secondaryImage": secondaryImage.asset->url
    }
  }
  
  `;

  return (await client.fetch(query)) as ServiceCategory[];
};

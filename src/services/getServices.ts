import { ServiceCategory } from "@/types/serviceCategory";
import { client } from "../../sanity/lib/client";

export const getServices = async () => {
  const query = `
  *[_type == "serviceCategories"] {
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

  return (await client
    .fetch(query)
    .then((services: ServiceCategory[]) =>
      services.sort(
        (a, b) => a.categoryServices.length - b.categoryServices.length
      )
    )) as ServiceCategory[];
};

import { ServiceCategory } from "@/types/serviceCategory";
import { client } from "../../sanity/lib/client";

export const getServices = async () => {
  const query = `
    *[_type == "serviceCategories"]{
      categoryName,
      categoryServices[]{
        order,
        title,
        description,
        mainImage{
          asset -> {
            url
          },
        },
        secondaryImage{
          asset -> {
            url
          },
        }
      }
    }
  `;

  return (await client.fetch(query)) as ServiceCategory[];
};

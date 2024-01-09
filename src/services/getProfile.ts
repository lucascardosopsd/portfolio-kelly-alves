import { ProfileProps } from "@/types/profile";
import { client } from "../../sanity/lib/client";

export const getProfile = async () => {
  const query = `
    *[_type == "profile"]{
        name,
        phone,
        instagramUrl,
        facebookUrl,
        whatsappUrl,
        address,
        hours,
        motto,
        bio,
        pics[]{
          name,
          file{
            asset -> {
              url
            },
          }
        },
    }
  `;

  return (await client.fetch(query)) as ProfileProps[];
};

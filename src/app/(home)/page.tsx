import { getProfile } from "@/services/getProfile";
import { getHero } from "../../services/getHero";
import Hero from "@/sections/Hero";
import Services from "@/sections/services";
import { getServices } from "@/services/getServices";

export default async function Home() {
  const heroData = await getHero();
  const profileData = await getProfile();
  const servicesData = await getServices();

  return (
    <>
      <Hero heroData={heroData[0]} profileData={profileData[0]} />
      <Services />
    </>
  );
}

import { getProfile } from "@/services/getProfile";
import { getHero } from "../../services/getHero";
import Hero from "@/sections/Hero";

export default async function Home() {
  const heroData = await getHero();
  const profileData = await getProfile();

  return (
    <>
      <Hero heroData={heroData[0]} profileData={profileData[0]} />
    </>
  );
}

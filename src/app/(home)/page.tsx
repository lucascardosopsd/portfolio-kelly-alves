import { getHero } from "../../services/getHero";
import Hero from "@/sections/Hero";

export default async function Home() {
  const heroData = await getHero();

  return (
    <>
      <Hero data={heroData[0]} />
    </>
  );
}

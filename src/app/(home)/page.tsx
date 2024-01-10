import { getProfile } from "@/services/getProfile";
import { getHero } from "../../services/getHero";
import Hero from "@/sections/Hero";
import Services from "@/sections/services";
import { getServices } from "@/services/getServices";
import Service from "@/sections/service";
import Bio from "@/sections/Bio";
import { getResults } from "@/services/getResults";
import Results from "@/sections/Results";

export default async function Home() {
  const heroData = await getHero();
  const profileData = await getProfile();
  const serviceCategoriesData = await getServices();
  const ResultsData = await getResults();

  return (
    <>
      <Hero heroData={heroData[0]} profileData={profileData[0]} />
      <Services serviceCategoriesData={serviceCategoriesData} />
      {serviceCategoriesData.map((category) =>
        category.categoryServices.map((service, index) => (
          <Service
            service={service}
            mirror={index % 2 === 0}
            key={index}
            categoryTitle={category.categoryName}
          />
        ))
      )}
      <Bio profileData={profileData[0]} />
      <Results resultsData={ResultsData} />
    </>
  );
}

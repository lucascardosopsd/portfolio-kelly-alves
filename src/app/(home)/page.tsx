import { getProfile } from "@/services/getProfile";
import { getHero } from "../../services/getHero";
import Hero from "@/sections/Hero";
import Services from "@/sections/services";
import { getServices } from "@/services/getServices";
import Bio from "@/sections/Bio";
import { getResults } from "@/services/getResults";
import Results from "@/sections/Results";
import { getRatings } from "@/services/getRatings";
import Ratings from "@/sections/ratings";
import SectionBand from "@/components/home/SectionBand";
import { getWorkLocation } from "@/services/getWorkLocation";
import Location from "@/sections/Location";

export default async function Home() {
  const heroData = await getHero();
  const profileData = await getProfile();
  const serviceCategoriesData = (await getServices()).sort(
    (a, b) => a.order - b.order
  );
  const resultsData = await getResults();
  const ratingsData = await getRatings();
  const workLocationData = await getWorkLocation();

  return (
    <>
      <SectionBand tone="brand">
        <Hero heroData={heroData[0]} profileData={profileData[0]} />
      </SectionBand>

      <SectionBand tone="white">
        <Services
          serviceCategoriesData={serviceCategoriesData}
          whatsappUrl={profileData[0].whatsappUrl}
        />
      </SectionBand>

      <SectionBand tone="white">
        <Results resultsData={resultsData} />
      </SectionBand>

      <SectionBand tone="white">
        <Bio profileData={profileData[0]} />
      </SectionBand>

      {workLocationData[0] ? (
        <SectionBand tone="white">
          <Location workLocationData={workLocationData[0]} />
        </SectionBand>
      ) : null}

      <SectionBand tone="white">
        <Ratings ratingsData={ratingsData} />
      </SectionBand>
    </>
  );
}

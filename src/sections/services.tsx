"use client";
import { watchInView } from "@/tools/watchInView";
import { useRef } from "react";
import FadeDiv from "@/components/FadeDiv";
import { ServiceCategory } from "@/types/serviceCategory";
import SectionHeading from "@/components/SectionHeading";

export interface ServicesProps {
  serviceCategoriesData: ServiceCategory[];
}

const Services = ({ serviceCategoriesData }: ServicesProps) => {
  const ref = useRef(null);
  watchInView({ ref, id: "hero" });

  return (
    <FadeDiv>
      <section
        className="flex items-center justify-center max-width flex-col gap-4 py-4 text-beige-800 relative"
        id="services"
        ref={ref}
      >
        <SectionHeading
          title="Procedimentos"
          subtitle="Meus procedimentos são pensados para lhe trazer o melhor em
          massoterapia e abaixo estarei apresentando os nomes e as vantagens de
          cada um."
        />

        <div className="grid grid-cols-1 mobile:grid-cols-2 tablet:grid-cols-4 gap-4">
          {serviceCategoriesData.map((category, index) => (
            <div
              className="border border-beige p-4 flex items-center justify-start rounded h-80 flex-col"
              key={index}
            >
              <p className="text-2xl text-center font-bold">
                {category.categoryName}
              </p>
              <ul>
                {category.categoryServices.map((service, index) => (
                  <p className="text-sm" key={index}>
                    • {service.title}
                  </p>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <button className="btn btn-primary">Ver Detalhes</button>
      </section>
    </FadeDiv>
  );
};

export default Services;

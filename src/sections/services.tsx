"use client";
import { watchInView } from "@/tools/watchInView";
import { useRef } from "react";
import FadeDiv from "@/components/FadeDiv";
import { ServiceCategory } from "@/types/serviceCategory";
import SectionHeading from "@/components/SectionHeading";
import useShowServices from "@/context/showServices";
import Image from "next/image";

export interface ServicesProps {
  serviceCategoriesData: ServiceCategory[];
}

const Services = ({ serviceCategoriesData }: ServicesProps) => {
  const { toggle } = useShowServices();
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
              key={index}
              className="flex flex-col items-center w-60 border border-beige-400 bg-beige-300 p-2 rounded justify-center"
            >
              <p className="font-semibold">{category.categoryName}</p>

              <div>
                {category.categoryServices.map((service, index) => (
                  <p className="text-sm text-center" key={index}>
                    • {service.title}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button className="btn btn-primary" onClick={toggle}>
          Ver Detalhes
        </button>

        {/* Illustrations */}
        <Image
          alt="illustration"
          src="/images/woman-illustration-1.svg"
          height={0}
          width={0}
          sizes="100vh"
          className="w-auto h-[70vh] tablet:h-[100vh] absolute -z-10 left-0 bottom-0 tablet:top-0"
        />
        <Image
          alt="illustration"
          src="/images/rose-illustration-1.svg"
          height={0}
          width={0}
          sizes="100vh"
          className="w-auto h-[70vh] tablet:h-[100vh] absolute -z-10 right-0 top-0"
        />
      </section>
    </FadeDiv>
  );
};

export default Services;

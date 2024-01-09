"use client";
import { watchInView } from "@/tools/watchInView";
import { useRef } from "react";
import FadeDiv from "@/components/FadeDiv";

export interface ServicesProps {}

const Services = ({}: ServicesProps) => {
  const ref = useRef(null);
  watchInView({ ref, id: "hero" });

  return (
    <FadeDiv>
      <section
        className="flex items-center justify-center max-width flex-col gap-4 py-8 tablet:py-0 text-beige-700 relative"
        id="services"
        ref={ref}
      >
        <p className="text-4xl">Procedimentos</p>
        <p className="text-center max-w-[600px]">
          Meus procedimentos são pensados para lhe trazer o melhor em
          massoterapia e abaixo estarei apresentando os nomes e as vantagens de
          cada um.
        </p>
      </section>
    </FadeDiv>
  );
};

export default Services;

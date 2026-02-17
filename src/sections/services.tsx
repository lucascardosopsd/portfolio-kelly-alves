"use client";
import { watchInView } from "@/tools/watchInView";
import { useRef } from "react";
import FadeDiv from "@/components/FadeDiv";
import { ServiceCategory } from "@/types/serviceCategory";
import SectionHeading from "@/components/SectionHeading";
import useShowServices from "@/context/showServices";
import Image from "next/image";
import { IoChevronDownSharp } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export interface ServicesProps {
  serviceCategoriesData: ServiceCategory[];
}

const Services = ({ serviceCategoriesData }: ServicesProps) => {
  const { toggle, isOpen } = useShowServices();
  const ref = useRef(null);
  watchInView({ ref, id: "services" });

  return (
    <FadeDiv>
      <section
        className="relative flex flex-col items-center justify-center gap-4 py-4 text-beige-800 max-width"
        id="services"
        ref={ref}
      >
        <SectionHeading
          title="Serviços e Procedimentos"
          subtitle="Meus procedimentos são pensados para lhe trazer o melhor em
          massoterapia e abaixo estarei apresentando os nomes e as vantagens de
          cada um."
        />

        <div className="grid grid-cols-1 gap-4 mobile:grid-cols-2 tablet:grid-cols-4">
          {serviceCategoriesData.slice(0, 4).map((category, index) => (
            <Card
              key={index}
              className="h-40 w-60 border-beige-400 bg-beige-300/80 backdrop-blur-sm"
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-center text-base text-beige-900">
                  {category.categoryName}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {category.categoryServices.map((service, idx) => (
                  <p className="text-center text-sm" key={idx}>
                    • {service.title}
                  </p>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 mobile:grid-cols-2 tablet:grid-cols-3">
          {serviceCategoriesData.slice(4).map((category, index) => (
            <Card
              key={index}
              className="h-40 w-60 border-beige-400 bg-beige-300/80 backdrop-blur-sm"
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-center text-base text-beige-900">
                  {category.categoryName}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {category.categoryServices.map((service, idx) => (
                  <p className="text-center text-sm" key={idx}>
                    • {service.title}
                  </p>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <Button
          type="button"
          variant="outline"
          className="w-full border-beige-700 bg-beige-200 text-beige-700 hover:bg-beige-300"
          onClick={toggle}
        >
          {!isOpen ? "Ver Detalhes" : "Fechar Detalhes"}
          {!isOpen ? (
            <IoChevronDownSharp className="text-beige-700" />
          ) : (
            <IoIosClose className="text-2xl text-beige-700" />
          )}
        </Button>

        <Image
          alt="illustration"
          src="/images/woman-illustration-1.svg"
          height={0}
          width={0}
          sizes="100vh"
          className="absolute bottom-0 left-0 -z-10 h-[70vh] w-auto tablet:top-0 tablet:h-[100vh]"
        />
        <Image
          alt="illustration"
          src="/images/rose-illustration-1.svg"
          height={0}
          width={0}
          sizes="100vh"
          className="absolute right-0 top-0 -z-10 h-[70vh] w-auto tablet:h-[100vh]"
        />
      </section>
    </FadeDiv>
  );
};

export default Services;

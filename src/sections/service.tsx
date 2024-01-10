"use client";
import { watchInView } from "@/tools/watchInView";
import { useRef } from "react";
import FadeDiv from "@/components/FadeDiv";
import { CategoryServiceProps } from "@/types/serviceCategory";
import useShowServices from "@/context/showServices";
import Image from "next/image";

export interface ServiceProps {
  service: CategoryServiceProps;
  categoryTitle: string;
  mirror: boolean;
}

const Service = ({ service, mirror, categoryTitle }: ServiceProps) => {
  const { isOpen } = useShowServices();
  const ref = useRef(null);
  watchInView({ ref, id: "hero" });

  if (!isOpen) {
    return <></>;
  }

  return (
    <FadeDiv>
      <section
        className="flex items-center justify-center max-width flex-col tablet:flex-row gap-4 py-20 tablet:py-4 text-beige-800 relative border-b tablet:border-none border-beige-400"
        id="services"
        ref={ref}
      >
        {/* left */}
        <div className="flex items-center justify-center relative h-full w-full flex-1">
          <div className="static tablet:absolute h-[350px] w-[250px] bottom-20 top-0 left-0 mobile:-left-10 right-0 mx-auto my-auto">
            <Image
              alt="Main image of service"
              src={service.mainImage}
              fill
              sizes="100vh"
              className="object-cover h-full w-full rounded"
            />
          </div>

          <div className="static tablet:absolute hidden tablet:block h-[250px] w-[150px] -bottom-30 top-0 -left-80 right-0 mx-auto my-auto -z-10 blur-[2px]">
            <Image
              alt="Secondary image of service"
              src={service.secondaryImage}
              fill
              sizes="100vh"
              className="object-cover h-full w-full rounded"
            />
          </div>
        </div>

        {/* Right */}
        <div className="flex-1 flex-col tablet:flex-row ">
          <div>
            <div className="flex flex-col border border-beige-400 bg-gradient-to-t tablet:bg-gradient-to-l from-beige-300 tablet:to-transparent to-beige-400 items-center tablet:items-end justify-center p-4 rounded">
              <p
                className={`text-2xl font-semibold text-center ${
                  !mirror ? "tablet:text-start" : "tablet:text-end"
                }`}
              >
                {categoryTitle}
              </p>

              <p
                className={`font-medium text-center ${
                  !mirror ? "tablet:text-start" : "tablet:text-end"
                }`}
              >
                {service.title}
              </p>
            </div>

            <p
              className={`text-center ${
                !mirror ? "tablet:text-start" : "tablet:text-end"
              }`}
            >
              {service.description}
            </p>
          </div>
        </div>

        <Image
          alt="illustration"
          src="/images/rose-illustration-2.svg"
          height={0}
          width={0}
          sizes="100vh"
          className={`hidden tablet:block w-auto h-[70vh] tablet:h-[100vh] absolute -z-20 ${
            mirror ? "left-0" : "right-0 transform -scale-x-100"
          } bottom-0 tablet:top-0`}
        />

        <Image
          alt="illustration"
          src="/images/woman-2-illustration.svg"
          height={0}
          width={0}
          sizes="100vh"
          className={`hidden tablet:block w-auto h-[70vh] tablet:h-[100vh] absolute -z-20 ${
            !mirror ? "left-0 transform -scale-x-100" : "right-0"
          } -bottom-0 tablet:top-0`}
        />
      </section>
    </FadeDiv>
  );
};

export default Service;

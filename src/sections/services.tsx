"use client";

import FadeDiv from "@/components/FadeDiv";
import InfoCard from "@/components/home/InfoCard";
import InfoModal from "@/components/home/InfoModal";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { watchInView } from "@/tools/watchInView";
import { CategoryServiceProps, ServiceCategory } from "@/types/serviceCategory";
import Link from "next/link";
import { useMemo, useRef, useState } from "react";

export interface ServicesProps {
  serviceCategoriesData: ServiceCategory[];
  whatsappUrl: string;
}

type ServiceGridItem = {
  categoryName: string;
  categoryOrder: number;
  service: CategoryServiceProps;
};

type SelectedService = {
  categoryName: string;
  service: CategoryServiceProps;
};

const Services = ({ serviceCategoriesData, whatsappUrl }: ServicesProps) => {
  const ref = useRef(null);
  const [selectedService, setSelectedService] = useState<SelectedService | null>(null);
  watchInView({ ref, id: "services" });

  const allServices = useMemo(() => {
    const flattened: ServiceGridItem[] = serviceCategoriesData.flatMap((category) =>
      category.categoryServices.map((service) => ({
        categoryName: category.categoryName,
        categoryOrder: category.order,
        service,
      }))
    );

    return flattened.sort((a, b) => {
      if (a.categoryOrder !== b.categoryOrder) {
        return a.categoryOrder - b.categoryOrder;
      }

      return a.service.order - b.service.order;
    });
  }, [serviceCategoriesData]);

  return (
    <FadeDiv>
      <section
        className="relative flex flex-col items-center justify-center section-padding text-foreground"
        id="services"
        ref={ref}
      >
        <SectionHeading
          badge="Procedimentos"
          title="Serviços e Procedimentos"
          subtitle="Meus procedimentos são pensados para lhe trazer o melhor em massoterapia e abaixo estarei apresentando os nomes e as vantagens de cada um."
        />

        <div className="grid w-full grid-cols-2 gap-3 tablet:grid-cols-3 tablet:gap-5">
          {allServices.map(({ categoryName, service }, index) => (
            <InfoCard
              key={`${service.title}-${index}`}
              badge={categoryName}
              title={service.title}
              description={service.description}
              imageUrl={service.mainImage}
              onMore={() => setSelectedService({ categoryName, service })}
            />
          ))}
        </div>

        <Button asChild className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90">
          <Link href={whatsappUrl}>Quero agendar pelo WhatsApp</Link>
        </Button>

        <InfoModal
          open={selectedService !== null}
          onOpenChange={(open) => {
            if (!open) {
              setSelectedService(null);
            }
          }}
          badge={selectedService?.categoryName}
          title={selectedService?.service.title ?? ""}
          description={selectedService?.service.description ?? ""}
        />
      </section>
    </FadeDiv>
  );
};

export default Services;

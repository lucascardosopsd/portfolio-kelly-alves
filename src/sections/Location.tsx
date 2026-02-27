"use client";

import FadeDiv from "@/components/FadeDiv";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { watchInView } from "@/tools/watchInView";
import { WorkLocationProps } from "@/types/workLocation";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

interface LocationProps {
  workLocationData: WorkLocationProps;
}

const Location = ({ workLocationData }: LocationProps) => {
  const ref = useRef(null);
  watchInView({ ref, id: "location" });
  const fullAddress = workLocationData.fullAddress?.trim() ?? "";
  const serviceHours = workLocationData.serviceHours?.trim() ?? "";

  return (
    <FadeDiv>
      <section
        className="relative flex flex-col items-center justify-center section-padding text-foreground"
        id="location"
        ref={ref}
      >
        <SectionHeading
          badge="Onde Atendo"
          title={workLocationData.name}
          subtitle="Confira os horários de atendimento e abra a localização no Google Maps."
        />

        <Card className="mx-auto w-full max-w-[560px] overflow-hidden border-border/90 bg-card/70">
          <CardContent className="flex flex-col gap-5 p-4">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground/70">
              Local no Mapa
            </p>

            <Link
              href={workLocationData.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-2xl border border-input"
            >
              <div className="relative aspect-square w-full">
                <Image
                  src={workLocationData.mapsImage}
                  alt={`Mapa do local ${workLocationData.name}`}
                  fill
                  sizes="(max-width: 1040px) 100vw, 560px"
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
            </Link>

            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground/70">
                Endereço
              </p>
              {fullAddress ? (
                <p className="rounded-xl border border-input bg-background/80 p-4 leading-relaxed whitespace-pre-line text-muted-foreground/90">
                  {fullAddress}
                </p>
              ) : (
                <p className="text-sm text-muted-foreground/85">
                  Endereço ainda não cadastrado.
                </p>
              )}
            </div>

            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground/70">
                Horários de Atendimento
              </p>
              {serviceHours ? (
                <p className="rounded-xl border border-input bg-background/80 p-4 leading-relaxed whitespace-pre-line text-muted-foreground/90">
                  {serviceHours}
                </p>
              ) : (
                <p className="text-sm text-muted-foreground/85">
                  Horários ainda não cadastrados.
                </p>
              )}
            </div>

            <Button asChild className="w-fit bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href={workLocationData.mapsLink} target="_blank" rel="noopener noreferrer">
                Como chegar
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </FadeDiv>
  );
};

export default Location;

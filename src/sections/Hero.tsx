"use client";

import FadeDiv from "@/components/FadeDiv";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { watchInView } from "@/tools/watchInView";
import { HeroDataProps } from "@/types/hero";
import { ProfileProps } from "@/types/profile";
import { CiFacebook, CiInstagram } from "react-icons/ci";
import { PiWhatsappLogoLight } from "react-icons/pi";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export interface HeroProps {
  heroData: HeroDataProps;
  profileData: ProfileProps;
}

const Hero = ({ heroData, profileData }: HeroProps) => {
  const ref = useRef(null);
  watchInView({ ref, id: "hero" });

  return (
    <FadeDiv>
      <section
        className="relative flex flex-col justify-center py-12 text-foreground tablet:min-h-[calc(100svh-5rem)] tablet:py-12"
        id="hero"
        ref={ref}
      >
        <div className="grid grid-cols-1 items-center gap-12 tablet:grid-cols-[1fr_0.85fr_1fr]">
          <div className="flex h-full flex-col justify-center gap-5 text-center tablet:text-left">
            <Badge className="mx-auto w-fit bg-primary text-primary-foreground tablet:mx-0">
              Atendimento personalizado
            </Badge>
            <h1 className="text-4xl leading-tight tablet:text-5xl">{heroData.title}</h1>
            <p className="max-w-[36ch] text-base leading-relaxed text-muted-foreground/90 tablet:max-w-[44ch]">
              {heroData.subTitle}
            </p>

            <div className="flex justify-center gap-4 text-5xl tablet:justify-start tablet:text-4xl">
              <Link href={profileData.instagramUrl} className="transition hover:scale-110">
                <CiInstagram />
              </Link>
              <Link href={profileData.facebookUrl} className="transition hover:scale-110">
                <CiFacebook />
              </Link>
              <Link href={profileData.whatsappUrl} className="transition hover:scale-110">
                <PiWhatsappLogoLight />
              </Link>
            </div>

            <Button asChild className="mx-auto w-fit bg-primary text-primary-foreground hover:bg-primary/90 tablet:mx-0">
              <Link href={profileData.whatsappUrl}>Agendar via WhatsApp</Link>
            </Button>
          </div>

          <div className="relative mx-auto w-full max-w-[460px]">
            <div className="pointer-events-none absolute left-1/2 top-2 -z-10 h-96 w-[34rem] -translate-x-1/2 rounded-full bg-primary/25 blur-[96px]" />
            <Image
              alt="Kelly Alves"
              src={profileData.pics[0].file.asset.url}
              width={820}
              height={980}
              sizes="(max-width: 1040px) 90vw, 33vw"
              className="h-auto w-full object-cover"
              priority
            />
          </div>

          <div className="flex h-full flex-col justify-center gap-5">
            <p className="text-center text-5xl font-semibold tablet:text-right">{profileData.name}</p>
            <p className="text-center text-base leading-relaxed text-muted-foreground/90 tablet:text-right">
              {profileData.motto}
            </p>

            <div className="grid grid-cols-1 gap-3 tablet:grid-cols-2">
              {heroData.highlights.map((highlight, index) => (
                <Card
                  key={index}
                  className="overflow-hidden border-border/90 bg-gradient-to-br from-card/70 to-surface-brand-soft/80 shadow-none"
                >
                  <CardContent className="relative flex flex-col gap-2 p-4">
                    <span className="absolute left-4 top-0 h-1 w-10 rounded-b-full bg-primary" />
                    <p className="rounded-lg border border-input/80 bg-card/50 px-3 py-2 text-center text-2xl font-semibold tablet:text-right">
                      {highlight.title}
                    </p>
                    <p className="text-center text-sm text-muted-foreground/85 tablet:text-right">
                      {highlight.subTitle}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 top-8 hidden tablet:block">
          <p className="text-center font-display text-6xl tracking-widest text-muted-foreground/10">
            MASSOTERAPIA E ESTETICA
          </p>
        </div>
      </section>
    </FadeDiv>
  );
};

export default Hero;

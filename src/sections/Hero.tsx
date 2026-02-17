"use client";
import { watchInView } from "@/tools/watchInView";
import { useRef } from "react";
import FadeDiv from "@/components/FadeDiv";
import { CiInstagram, CiFacebook } from "react-icons/ci";
import { PiWhatsappLogoLight } from "react-icons/pi";
import { HeroDataProps } from "@/types/hero";
import { ProfileProps } from "@/types/profile";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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
        className="relative flex flex-col items-center justify-between text-beige-800 max-width"
        id="hero"
        ref={ref}
      >
        <div className="flex flex-col-reverse items-center justify-center py-10 tablet:flex-row tablet:py-0">
          <div className="mt-0 flex h-full flex-1 flex-col justify-center gap-5 text-center tablet:mt-20 tablet:text-start">
            <Badge className="mx-auto w-fit bg-beige-700 text-beige-100 tablet:mx-0">
              Atendimento personalizado
            </Badge>
            <p className="text-5xl font-semibold">{heroData.title}</p>
            <p>{heroData.subTitle}</p>
            <div className="flex justify-center gap-4 text-6xl tablet:justify-start tablet:text-4xl">
              <Link
                href={profileData.instagramUrl}
                className="transition hover:scale-125"
              >
                <CiInstagram />
              </Link>

              <Link
                href={profileData.facebookUrl}
                className="transition hover:scale-125"
              >
                <CiFacebook />
              </Link>

              <Link
                href={profileData.whatsappUrl}
                className="transition hover:scale-125"
              >
                <PiWhatsappLogoLight />
              </Link>
            </div>
            <Button
              asChild
              className="mx-auto bg-beige-700 text-beige-100 hover:bg-beige-800 tablet:mx-0"
            >
              <Link href={profileData.whatsappUrl}>Agendar via WhatsApp</Link>
            </Button>
          </div>

          <div className="relative flex h-full w-full flex-1 justify-center align-end tablet:flex-[0.9]">
            <Image
              alt="Hero"
              src={profileData.pics[0].file.asset.url}
              width={0}
              height={0}
              sizes="100vh"
              className="h-auto w-full"
            />
          </div>

          <div className="mb-0 flex h-full flex-1 flex-col justify-center gap-5 align-center tablet:mb-20">
            <p className="text-center text-6xl font-semibold tablet:text-end tablet:text-5xl">
              {profileData.name}
            </p>
            <p className="text-center tablet:text-end">{profileData.motto}</p>
            <div className="flex flex-col gap-4 tablet:flex-row">
              {heroData.highlights.map((highlight, index) => (
                <Card
                  key={index}
                  className="w-full border-beige bg-beige-200/80 backdrop-blur-sm"
                >
                  <CardContent className="flex flex-col items-center justify-center gap-2 p-3 tablet:items-end">
                    <p className="w-full rounded border border-beige p-2 text-center text-3xl tablet:text-end tablet:text-2xl">
                      {highlight.title}
                    </p>
                    <p className="text-center text-base tablet:text-end tablet:text-sm">
                      {highlight.subTitle}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div>
          <p className="absolute left-0 top-10 -z-50 text-8xl font-black text-beige">
            MASSOTERAPEUTA
          </p>
          <p className="absolute -right-10 bottom-10 -z-50 text-8xl font-black text-beige">
            ESTETICISTA
          </p>
        </div>
      </section>
    </FadeDiv>
  );
};

export default Hero;

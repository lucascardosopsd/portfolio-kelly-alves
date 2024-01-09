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
        className="flex items-center justify-center max-width flex-col-reverse tablet:flex-row gap-4 py-8 tablet:py-0 text-beige-800 relative !tablet:min-h-[calc(100svh-5rem)]"
        id="hero"
        ref={ref}
      >
        {/* Left Side */}
        <div className="flex flex-col text-center tablet:text-start justify-center flex-1 h-full gap-5 tablet:mt-20">
          <p className="text-5xl font-semibold">{heroData.title}</p>
          <p>{heroData.subTitle}</p>
          <div className="flex justify-center tablet:justify-start gap-4 text-6xl tablet:text-4xl">
            <Link
              href={profileData.instagramUrl}
              className="hover:scale-125 transition"
            >
              <CiInstagram />
            </Link>

            <Link
              href={profileData.facebookUrl}
              className="hover:scale-125 transition"
            >
              <CiFacebook />
            </Link>

            <Link
              href={profileData.whatsappUrl}
              className="hover:scale-125 transition"
            >
              <PiWhatsappLogoLight />
            </Link>
          </div>
        </div>

        {/* Center */}
        <div className="flex flex-col align-center justify-center flex-1 h-full w-full relative">
          <span className="w-full h-20 bg-gradient-to-t from-beige-300 to-transparent absolute bottom-0 left-0 z-10" />

          <Image
            alt="Hero"
            src={profileData.pics[0].file.asset.url}
            width={0}
            height={0}
            sizes="100vh"
            className="w-full h-auto"
          />
        </div>

        {/* Right */}
        <div className="flex flex-col align-center justify-center flex-1 h-full gap-5 tablet:mb-20">
          <p className="text-6xl tablet:text-5xl font-semibold text-center tablet:text-end">
            {profileData.name}
          </p>
          <p className="text-center tablet:text-end">{profileData.motto}</p>
          <div className="flex gap-4">
            {heroData.highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex flex-col gap-2 items-center justify-center tablet:justify-end"
              >
                <p className="text-3xl tablet:text-2xl text-center tablet:text-end w-full border border-beige p-2 rounded">
                  {highlight.title}
                </p>
                <p className="text-center tablet:text-end text-base tablet:text-sm">
                  {highlight.subTitle}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Background text */}
        <div>
          <p className="absolute text-8xl -z-50 text-beige font-black left-0 top-10">
            MASSOTERAPEUTA
          </p>
          <p className="absolute text-8xl -z-50 text-beige font-black right-0 bottom-10">
            ESTETICISTA
          </p>
        </div>
      </section>
    </FadeDiv>
  );
};

export default Hero;

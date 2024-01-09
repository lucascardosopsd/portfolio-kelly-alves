"use client";
import { watchInView } from "@/tools/watchInView";
import { ArrowRight, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import FadeDiv from "@/components/FadeDiv";
import { socialLinks } from "@/constants";

interface HeroDataProps {
  greeting: string;
  title: string;
  subtitle: string;
  pic: {
    asset: {
      url: string;
    };
  };
}

interface HeroProps {
  data: HeroDataProps;
}

const Hero = ({ data }: HeroProps) => {
  const ref = useRef(null);
  watchInView({ ref, id: "hero" });

  return (
    <FadeDiv>
      <section
        className="flex items-center justify-center max-width flex-col-reverse tablet:flex-row space-x-4 py-4 tablet:py-0"
        id="hero"
        ref={ref}
      >
        {/* Left */}
        <div className="flex-1 tablet:w:2/3 mt-10 tablet:mt-0 space-y-4">
          <div className="flex flex-col gap-3 items-center tablet:items-start max-w-2xl text-center tablet:text-left">
            <p className="px-4 py-2 bg-beige-500 text-grey-600 w-max rounded">
              {data?.greeting}
            </p>
            <h1 className="text-grey">{data?.title}</h1>
            <p className="text-grey-600">{data?.subtitle}</p>
          </div>

          <div className="flex flex-col space-y-4">
            <Link href="/#portfolio" className="btn btn-primary">
              Portfolio
              <ArrowRight size={16} />
            </Link>

            <Link
              href="/contact"
              className="btn border hover:bg-zinc-100 hover:text-purple transition border-beige"
            >
              <Phone />
              Fale Comigo
            </Link>

            <div className="flex justify-center tablet:justify-start gap-3">
              {socialLinks.map((link, index) => (
                <div className="flex items-center space-x-2" key={index}>
                  <a
                    href={link.url}
                    className="w-10 h-10 bg-purple text-white flex items-center justify-center rounded"
                  >
                    <link.icon strokeWidth={0} fill="currentColor" />
                  </a>
                  <p className="text-zinc-800">{link.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Right */}
        <div className="flex flex-1 h-full w-full items-center justify-center py-4 tablet:py-0">
          <div className="relative h-[70vh] w-auto rounded-2xl border border-beige bg-zinc-50">
            <Image
              src={data?.pic.asset.url}
              alt="Foto Desenvolvedor"
              height={1000}
              width={1000}
              className="object-cover h-full w-full"
            />
          </div>
        </div>
      </section>
    </FadeDiv>
  );
};

export default Hero;

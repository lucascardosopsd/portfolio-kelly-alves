"use client";
import { watchInView } from "@/tools/watchInView";
import { useRef } from "react";
import FadeDiv from "@/components/FadeDiv";
import { ProfileProps } from "@/types/profile";
import Image from "next/image";

export interface BioProps {
  profileData: ProfileProps;
}

const Bio = ({ profileData }: BioProps) => {
  const ref = useRef(null);
  watchInView({ ref, id: "bio" });

  return (
    <FadeDiv>
      <section
        className="flex items-center justify-center max-width flex-col tablet:flex-row gap-4 py-4 text-beige-800 relative"
        id="bio"
        ref={ref}
      >
        <div className="flex-1 flex items-center flex-center h-full w-full">
          <div className="flex flex-col align-center justify-center flex-1 h-[90svh] w-full relative">
            <Image
              alt="Hero"
              src={profileData.pics[1].file.asset.url}
              width={0}
              height={0}
              sizes="100vh"
              fill
              className="object-contain w-full h-full"
            />
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center text-beige-800">
          <p className="text-2xl font-semibold text-center tablet:text-end w-full">
            Biografia
          </p>
          <p className="text-justify">{profileData.bio}</p>
        </div>

        <Image
          alt="illustration"
          src="/images/woman-3-illustration.svg"
          height={0}
          width={0}
          sizes="100vh"
          className={`hidden tablet:block w-auto h-[70vh] tablet:h-[100vh] absolute -z-20 right-0`}
        />
      </section>
    </FadeDiv>
  );
};

export default Bio;

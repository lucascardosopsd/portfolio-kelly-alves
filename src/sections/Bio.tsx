"use client";

import FadeDiv from "@/components/FadeDiv";
import { Card } from "@/components/ui/card";
import { watchInView } from "@/tools/watchInView";
import { ProfileProps } from "@/types/profile";
import Image from "next/image";
import { useRef } from "react";

export interface BioProps {
  profileData: ProfileProps;
}

const Bio = ({ profileData }: BioProps) => {
  const ref = useRef(null);
  watchInView({ ref, id: "bio" });

  return (
    <FadeDiv>
      <section
        className="relative grid grid-cols-1 items-center gap-8 section-padding text-foreground tablet:grid-cols-2"
        id="bio"
        ref={ref}
      >
        <Card className="border-border bg-surface-brand-soft/70 p-4">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
            <Image
              alt="Foto da profissional"
              src={profileData.pics[1].file.asset.url}
              fill
              sizes="(max-width: 1040px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </Card>

        <div className="space-y-4">
          <p className="font-display text-4xl font-semibold text-foreground">Biografia</p>
          <p className="max-w-2xl text-justify text-base leading-8 text-muted-foreground/90">
            {profileData.bio}
          </p>
        </div>
      </section>
    </FadeDiv>
  );
};

export default Bio;

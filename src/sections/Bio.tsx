"use client";

import FadeDiv from "@/components/FadeDiv";
import { Card } from "@/components/ui/card";
import { watchInView } from "@/tools/watchInView";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { PortableTextBlock } from "@portabletext/types";
import { ProfileProps } from "@/types/profile";
import Image from "next/image";
import { useRef } from "react";

export interface BioProps {
  profileData: ProfileProps;
}

const portableTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-justify text-base leading-8 text-muted-foreground/90">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="font-display text-2xl font-semibold text-foreground">{children}</h2>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-primary pl-4 italic text-muted-foreground/90">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc space-y-2 pl-6">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal space-y-2 pl-6">{children}</ol>,
  },
  marks: {
    link: ({ children, value }) => {
      const href = value?.href as string | undefined;
      const isExternal = href?.startsWith("http");

      if (!href) {
        return <>{children}</>;
      }

      return (
        <a
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="font-medium text-primary underline underline-offset-4 transition hover:opacity-80"
        >
          {children}
        </a>
      );
    },
  },
};

const Bio = ({ profileData }: BioProps) => {
  const ref = useRef(null);
  watchInView({ ref, id: "bio" });
  const bioValue: PortableTextBlock[] = Array.isArray(profileData.bio)
    ? profileData.bio
    : profileData.bio
      ? [
          {
            _type: "block",
            _key: "legacy-bio",
            style: "normal",
            markDefs: [],
            children: [
              {
                _type: "span",
                _key: "legacy-bio-span",
                text: profileData.bio,
                marks: [],
              },
            ],
          },
        ]
      : [];

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
          <div className="max-w-2xl space-y-4">
            <PortableText value={bioValue} components={portableTextComponents} />
          </div>
        </div>
      </section>
    </FadeDiv>
  );
};

export default Bio;

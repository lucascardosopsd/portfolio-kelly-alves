"use client";

import FadeDiv from "@/components/FadeDiv";
import SectionHeading from "@/components/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { watchInView } from "@/tools/watchInView";
import { ResultProps } from "@/types/result";
import Image from "next/image";
import { useRef } from "react";

export interface ResultsProps {
  resultsData: ResultProps[];
}

const Results = ({ resultsData }: ResultsProps) => {
  const ref = useRef(null);
  watchInView({ ref, id: "results" });

  return (
    <FadeDiv>
      <section
        className="relative flex flex-col items-center justify-center section-padding text-foreground"
        id="results"
        ref={ref}
      >
        <SectionHeading
          badge="Antes e Depois"
          title="Resultados"
          subtitle="Essas são as provas do meu trabalho. Meus resultados são comprovados."
        />

        <div className="grid w-full grid-cols-1 gap-6 tablet:grid-cols-2">
          {resultsData.map((result, index) => (
            <Card
              className="h-full overflow-hidden rounded-3xl border-border bg-card/55"
              key={index}
            >
              <CardHeader className="space-y-3 border-b border-border/80 pb-4">
                <Badge variant="secondary" className="w-fit rounded-full bg-muted text-muted-foreground">
                  Caso {String(index + 1).padStart(2, "0")}
                </Badge>
                <CardTitle className="text-2xl leading-tight text-foreground">
                  {result.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-5">
                <div className="grid grid-cols-1 gap-5 mobile:grid-cols-2">
                  <article className="group relative overflow-hidden rounded-2xl border border-border bg-background/70 p-3">
                    <Badge className="absolute left-5 top-5 z-20 rounded-full bg-primary px-3 text-primary-foreground">
                      Antes
                    </Badge>
                    <div className="relative h-64 w-full overflow-hidden rounded-xl">
                      <Image
                        alt={`Resultado antes - ${result.title}`}
                        src={result.beforePic}
                        fill
                        sizes="(max-width: 1040px) 100vw, 25vw"
                        className="object-cover transition duration-300 group-hover:scale-105"
                      />
                    </div>
                  </article>

                  <article className="group relative overflow-hidden rounded-2xl border border-border bg-background/70 p-3">
                    <Badge className="absolute left-5 top-5 z-20 rounded-full bg-primary px-3 text-primary-foreground">
                      Depois
                    </Badge>
                    <div className="relative h-64 w-full overflow-hidden rounded-xl">
                      <Image
                        alt={`Resultado depois - ${result.title}`}
                        src={result.afterPic}
                        fill
                        sizes="(max-width: 1040px) 100vw, 25vw"
                        className="object-cover transition duration-300 group-hover:scale-105"
                      />
                    </div>
                  </article>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </FadeDiv>
  );
};

export default Results;

"use client";
import { watchInView } from "@/tools/watchInView";
import { useRef } from "react";
import FadeDiv from "@/components/FadeDiv";
import Image from "next/image";
import { ResultProps } from "@/types/result";
import SectionHeading from "@/components/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export interface ResultsProps {
  resultsData: ResultProps[];
}

const Results = ({ resultsData }: ResultsProps) => {
  const ref = useRef(null);
  watchInView({ ref, id: "results" });

  return (
    <FadeDiv>
      <section
        className="relative flex flex-col items-center justify-center gap-4 py-4 text-beige-800 max-width"
        id="results"
        ref={ref}
      >
        <SectionHeading
          title="Resultado"
          subtitle="Essas são as provas do meu trabalho. Meus resultados são comprovados."
        />

        <div className="relative flex w-full flex-col gap-4 overflow-x-auto tablet:flex-row tablet:p-10">
          <span className="absolute right-0 top-0 bottom-0 z-10 my-0 hidden h-full w-[200px] bg-gradient-to-l from-beige-300 to-transparent tablet:block" />
          {resultsData.map((result, index) => (
            <Card
              className="flex h-full w-full flex-1 flex-col border-beige-600 bg-beige-100/70 tablet:min-w-[500px]"
              key={index}
            >
              <CardHeader className="items-center pb-2">
                <CardTitle className="text-2xl font-medium text-beige-700 tablet:text-lg">
                  {result.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col tablet:flex-row">
                  <div className="relative h-[300px] w-auto rounded p-4">
                    <Badge className="absolute left-6 top-6 z-20 bg-beige-700 text-beige-100">
                      Antes
                    </Badge>
                    <Image
                      alt="result"
                      src={result.beforePic}
                      height={0}
                      width={0}
                      sizes="100vh"
                      className="h-full w-full rounded object-cover"
                    />
                  </div>

                  <div className="relative h-[300px] w-auto rounded p-4">
                    <Badge className="absolute left-6 top-6 z-20 bg-beige-700 text-beige-100">
                      Depois
                    </Badge>
                    <Image
                      alt="result"
                      src={result.afterPic}
                      height={0}
                      width={0}
                      sizes="100vh"
                      className="h-full w-full rounded object-cover"
                    />
                  </div>
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

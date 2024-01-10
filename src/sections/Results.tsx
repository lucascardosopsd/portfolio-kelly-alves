"use client";
import { watchInView } from "@/tools/watchInView";
import { useRef } from "react";
import FadeDiv from "@/components/FadeDiv";
import Image from "next/image";
import { ResultProps } from "@/types/result";
import SectionHeading from "@/components/SectionHeading";

export interface ResultsProps {
  resultsData: ResultProps[];
}

const Results = ({ resultsData }: ResultsProps) => {
  const ref = useRef(null);
  watchInView({ ref, id: "results" });

  return (
    <FadeDiv>
      <section
        className="flex items-center justify-center max-width flex-col gap-4 py-4 text-beige-800 relative"
        id="results"
        ref={ref}
      >
        <SectionHeading
          title="Resultdos"
          subtitle="Essas são as provas do meu trabalho. Meus resultados são comprovados."
        />
        <div className="relative flex flex-col tablet:flex-row gap-4 w-full tablet:p-10 overflow-x-auto">
          <span className="bg-gradient-to-l from-beige-300 to-transparent h-full w-[200px] hidden tablet:block absolute right-0 top-0 bottom-0 my-0 z-10" />
          {resultsData.map((result, index) => (
            <div
              className="flex-1 flex flex-col h-full w-full tablet:min-w-[500px] border border-beige-600 rounded "
              key={index}
            >
              <p className="text-beige-700 flex items-center justify-center font-normal h-10 text-2xl tablet:text-lg">
                {result.title}
              </p>
              <div className="flex flex-col tablet:flex-row">
                <div className="relative w-auto h-[300px] p-4 rounded">
                  <Image
                    alt="result"
                    src={result.beforePic}
                    height={0}
                    width={0}
                    sizes="100vh"
                    className="h-full w-full object-cover rounded"
                  />
                </div>

                <div className="relative w-auto h-[300px] p-4 rounded">
                  <Image
                    alt="result"
                    src={result.afterPic}
                    height={0}
                    width={0}
                    sizes="100vh"
                    className="h-full w-full object-cover rounded"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </FadeDiv>
  );
};

export default Results;

"use client";
import { watchInView } from "@/tools/watchInView";
import { useRef } from "react";
import FadeDiv from "@/components/FadeDiv";
import SectionHeading from "@/components/SectionHeading";
import Image from "next/image";
import { RatingDataProps } from "@/types/rating";
import { FaStar } from "react-icons/fa";

export interface RatingProps {
  ratingsData: RatingDataProps[];
}

const Ratings = ({ ratingsData }: RatingProps) => {
  const ref = useRef(null);
  watchInView({ ref, id: "ratings" });

  return (
    <FadeDiv>
      <section
        className="flex items-center justify-center max-width flex-col gap-4 py-4 text-beige-800 relative"
        id="ratings"
        ref={ref}
      >
        <SectionHeading
          title="Avaliações"
          subtitle="Essas são avaliações reais sobre clientes safisteitas com relação ao meu trabalho"
        />

        <div className="grid grid-cols-1 tablet:grid-cols-2 gap-8">
          {ratingsData.map((rating, index) => (
            <div className="flex flex-col tablet:flex-row gap-4">
              <div className="flex flex-col justify-center items-center gap-1">
                <div className="flex flex-col justify-center  h-40 w-40 relative">
                  <Image
                    alt="Foto Cliente"
                    src={rating.clientPic}
                    sizes="100vh"
                    width={0}
                    height={0}
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-center">{rating.name}</p>

                  <div className="flex justify-between w-1/2 mx-auto">
                    {[...Array(5)].map(() => (
                      <FaStar />
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <p>{rating.testimony}</p>
                <p className="font-semibold">{rating.instagram}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </FadeDiv>
  );
};

export default Ratings;

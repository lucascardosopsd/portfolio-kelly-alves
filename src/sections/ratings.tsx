"use client";
import { watchInView } from "@/tools/watchInView";
import { useRef } from "react";
import FadeDiv from "@/components/FadeDiv";
import SectionHeading from "@/components/SectionHeading";
import { RatingDataProps } from "@/types/rating";
import { FaStar } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export interface RatingProps {
  ratingsData: RatingDataProps[];
}

const Ratings = ({ ratingsData }: RatingProps) => {
  const ref = useRef(null);
  watchInView({ ref, id: "ratings" });

  return (
    <FadeDiv>
      <section
        className="relative flex flex-col items-center justify-center gap-4 py-4 text-beige-800 max-width"
        id="ratings"
        ref={ref}
      >
        <SectionHeading
          title="Avaliações"
          subtitle="Essas são avaliações reais sobre clientes safisteitas com relação ao meu trabalho"
        />

        <div className="grid grid-cols-1 gap-8 tablet:grid-cols-2">
          {ratingsData.map((rating, index) => (
            <Card key={index} className="border-beige-400 bg-beige-100/80">
              <CardContent className="flex flex-col gap-4 p-5 tablet:flex-row">
                <div className="flex flex-col items-center justify-center gap-2">
                  <Avatar className="h-24 w-24 border-2 border-beige-500 tablet:h-28 tablet:w-28">
                    <AvatarImage src={rating.clientPic} alt={rating.name} />
                    <AvatarFallback>{rating.name.slice(0, 2)}</AvatarFallback>
                  </Avatar>

                  <p className="text-center font-medium">{rating.name}</p>

                  <div className="mx-auto flex w-1/2 justify-between text-beige-700">
                    {[...Array(5)].map((_, idx) => (
                      <FaStar key={idx} />
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <p>{rating.testimony}</p>
                  <Badge
                    variant="secondary"
                    className="w-fit bg-beige-200 text-beige-800"
                  >
                    {rating.instagram}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </FadeDiv>
  );
};

export default Ratings;

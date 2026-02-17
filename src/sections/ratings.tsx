"use client";

import FadeDiv from "@/components/FadeDiv";
import SectionHeading from "@/components/SectionHeading";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { watchInView } from "@/tools/watchInView";
import { RatingDataProps } from "@/types/rating";
import { FaStar } from "react-icons/fa";
import { useRef } from "react";

export interface RatingProps {
  ratingsData: RatingDataProps[];
}

const Ratings = ({ ratingsData }: RatingProps) => {
  const ref = useRef(null);
  watchInView({ ref, id: "ratings" });

  return (
    <FadeDiv>
      <section
        className="relative flex flex-col items-center justify-center section-padding text-foreground"
        id="ratings"
        ref={ref}
      >
        <SectionHeading
          badge="Prova Social"
          title="Avaliações"
          subtitle="Essas são avaliações reais sobre clientes safisteitas com relação ao meu trabalho"
        />

        <div className="grid w-full grid-cols-1 gap-6 tablet:grid-cols-2">
          {ratingsData.map((rating, index) => (
            <Card
              key={index}
              className="h-full overflow-hidden rounded-2xl border-border/90 bg-card"
            >
              <CardContent className="relative flex h-full flex-col gap-4 p-6 tablet:flex-row">
                <span className="absolute left-6 top-0 h-1 w-12 rounded-b-full bg-primary" />
                <div className="flex min-w-[120px] flex-col items-center gap-3">
                  <Avatar className="h-20 w-20 border-2 border-input ring-4 ring-secondary/70 tablet:h-24 tablet:w-24">
                    <AvatarImage src={rating.clientPic} alt={rating.name} />
                    <AvatarFallback>{rating.name.slice(0, 2)}</AvatarFallback>
                  </Avatar>

                  <p className="text-center text-sm font-semibold text-foreground">{rating.name}</p>
                  <div className="flex gap-1 text-sm text-primary">
                    {[...Array(5)].map((_, idx) => (
                      <FaStar key={idx} />
                    ))}
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-between gap-3">
                  <p className="leading-relaxed text-muted-foreground/90">{rating.testimony}</p>
                  <Badge variant="secondary" className="w-fit rounded-full bg-muted px-3 text-primary">
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

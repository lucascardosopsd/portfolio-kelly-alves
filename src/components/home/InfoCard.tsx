"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

interface InfoCardProps {
  badge: string;
  title: string;
  description: string;
  imageUrl?: string;
  onMore: () => void;
  moreLabel?: string;
}

export default function InfoCard({
  badge,
  title,
  description,
  imageUrl,
  onMore,
  moreLabel = "Ver mais",
}: InfoCardProps) {
  return (
    <Card className="group overflow-hidden rounded-2xl border-border/90 bg-card/95 transition duration-300 hover:-translate-y-1 hover:border-input">
      {imageUrl ? (
        <div className="relative h-32 w-full overflow-hidden border-b border-border tablet:h-44">
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-foreground/15 via-transparent to-transparent opacity-45" />
          <Image
            alt={title}
            src={imageUrl}
            fill
            sizes="(max-width: 1040px) 100vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-110"
          />
        </div>
      ) : null}

      <CardHeader className="space-y-2 pb-2">
        <Badge
          variant="secondary"
          className="max-w-full overflow-hidden text-ellipsis whitespace-nowrap rounded-full bg-muted px-3 text-muted-foreground"
        >
          {badge}
        </Badge>
        <CardTitle className="truncate text-base leading-tight text-foreground tablet:text-xl">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-2">
        <CardDescription className="truncate min-h-[44px] text-xs leading-relaxed text-muted-foreground/85 tablet:min-h-[64px] tablet:text-sm">
          {description}
        </CardDescription>
        <Button
          type="button"
          variant="ghost"
          className="h-auto px-0 py-0 text-xs text-primary hover:bg-transparent hover:text-primary/80 tablet:text-sm"
          onClick={onMore}
        >
          {moreLabel}
        </Button>
      </CardContent>
    </Card>
  );
}

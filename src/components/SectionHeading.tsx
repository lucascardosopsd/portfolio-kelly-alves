"use client";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  badge?: string;
  classname?: string;
}

const SectionHeading = ({
  title,
  subtitle,
  badge = "Destaque",
  classname,
}: SectionHeadingProps) => {
  return (
    <div className={cn("mx-auto mb-10 w-full max-w-3xl text-center", classname)}>
      <Badge variant="secondary" className="mb-4 bg-secondary/85 text-muted-foreground">
        {badge}
      </Badge>
      <h2 className="mb-3 text-foreground">{title}</h2>
      <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground/85">
        {subtitle}
      </p>
      <Separator className="mx-auto mt-5 w-24 bg-primary/70" />
    </div>
  );
};

export default SectionHeading;

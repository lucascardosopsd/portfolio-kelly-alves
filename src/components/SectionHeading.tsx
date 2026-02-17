"use client";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  classname?: string;
}

const SectionHeading = ({
  title,
  subtitle,
  classname,
}: SectionHeadingProps) => {
  return (
    <div className={`mx-auto mb-6 w-full max-w-xl text-center ${classname ?? ""}`}>
      <Badge variant="secondary" className="mb-3 bg-beige-200 text-beige-800">
        Destaque
      </Badge>
      <h2 className="mb-2 text-beige-800">{title}</h2>
      <p className="text-beige-700">{subtitle}</p>
      <Separator className="mx-auto mt-4 w-28 bg-beige-500" />
    </div>
  );
};

export default SectionHeading;

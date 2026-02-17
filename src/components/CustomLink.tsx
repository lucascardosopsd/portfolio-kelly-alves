"use client";

import useDivInView from "@/context/DivInVIew";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface CustomLinkProps {
  href: string;
  label: string;
  classname?: string;
}

const CustomLink = ({ href, label, classname }: CustomLinkProps) => {
  const { currentDivId } = useDivInView();
  const isActive = currentDivId == href.split("#")[1];

  return (
    <Link
      href={href}
      className={cn(
        "relative block py-3 text-foreground/85 transition-colors hover:text-foreground",
        "after:absolute after:left-0 after:bottom-2 after:block after:h-0.5 after:w-full",
        "after:bg-primary after:transition after:duration-300",
        isActive ? "after:scale-x-100 after:origin-right" : "after:origin-left after:scale-x-0 hover:after:scale-x-100",
        classname
      )}
    >
      {label}
    </Link>
  );
};

export default CustomLink;

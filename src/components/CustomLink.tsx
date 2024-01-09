"use client";
import useDivInView from "@/context/DivInVIew";
import Link from "next/link";

interface CustomLinkProps {
  href: string;
  label: string;
  classname?: string;
}

const CustomLink = ({ href, label, classname }: CustomLinkProps) => {
  const { currentDivId } = useDivInView();

  return (
    <Link
      href={href}
      className={`py-3 text-beige-800 hover:text-beige-900 transition-colors relative block after:block after:absolute after:left-0 after:h-0.5 after:bg-beige-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-right after:hover:origin-left ${classname} ${
        currentDivId == href.split("#")[1]
          ? "after:scale-x-100 after:origin-right"
          : "after:scale-x-0 after:origin-left"
      }`}
    >
      {label}
    </Link>
  );
};

export default CustomLink;

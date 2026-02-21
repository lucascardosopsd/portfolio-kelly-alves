"use client";

import { navLinks } from "../constants";
import { ProfileProps } from "@/types/profile";
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import NavLink from "./CustomLink";

interface HeaderProps {
  profileData: ProfileProps;
}

const Header = ({ profileData }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const nextIsScrolled = window.scrollY > 70;
      setIsScrolled((prev) => (prev === nextIsScrolled ? prev : nextIsScrolled));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`sticky top-0 z-40 hidden w-full items-center tablet:flex transition-[background-color,backdrop-filter,border-color,box-shadow,transform,opacity] duration-300 ease-out motion-reduce:transition-none ${
          isScrolled
            ? "border-b border-border bg-background/80 shadow-custom backdrop-blur-md translate-y-0 opacity-100"
            : "border-b border-transparent bg-transparent shadow-none translate-y-0 opacity-95"
        }`}
      >
        <header className="z-10 flex h-20 w-full items-center justify-between max-width">
          <nav className="flex w-full items-center justify-center gap-12 max-tablet:hidden">
            <ul className="flex items-center gap-8 text-base font-semibold">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink href={link.url} label={link.label} />
                </li>
              ))}
            </ul>
          </nav>
        </header>
      </div>

      <header className="fixed right-3 top-3 z-50 flex w-full justify-end tablet:hidden">
        <MobileMenu whatsappUrl={profileData.whatsappUrl} />
      </header>
    </>
  );
};

export default Header;

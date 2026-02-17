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
  const [fixedHeader, setFixedHeader] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setFixedHeader(window.scrollY > 70);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`hidden w-full items-center transition tablet:flex ${
          fixedHeader
            ? "fixed top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md"
            : "static bg-transparent"
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

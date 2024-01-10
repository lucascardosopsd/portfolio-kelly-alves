"use client";

import NavLink from "./CustomLink";
import MobileMenu from "./MobileMenu";
import { navLinks } from "../constants";
import { ProfileProps } from "@/types/profile";
import { useEffect, useState } from "react";

interface HeaderProps {
  profileData: ProfileProps;
}

const Header = ({ profileData }: HeaderProps) => {
  const [fixedHeader, setFixedHeader] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      !fixedHeader && setFixedHeader(window.scrollY >= 200);

      fixedHeader && setFixedHeader(window.scrollY <= 200);
    });
  }, []);

  return (
    <>
      <div
        className={`hidden tablet:flex w-full items-center transition ${
          fixedHeader ? "fixed top-0 bg-beige-400 z-30" : "static"
        }`}
      >
        <header className="flex items-center justify-between h-20 max-width w-full z-10">
          <nav className="flex items-center justify-center w-full gap-12 max-tablet:hidden">
            <ul className="flex items-center gap-8 text-lg">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink href={link.url} label={link.label} />
                </li>
              ))}
            </ul>
          </nav>
        </header>
      </div>
      <header className="w-full flex justify-end fixed z-50 top-2 right-2">
        <MobileMenu whatsappUrl={profileData.whatsappUrl} />
      </header>
    </>
  );
};

export default Header;

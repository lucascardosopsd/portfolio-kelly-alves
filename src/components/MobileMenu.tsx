"use client";

import { navLinks } from "../constants";
import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./CustomLink";

const MobileMenu = ({ whatsappUrl }: { whatsappUrl: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="tablet:hidden">
      <button
        className="rounded-xl border border-input bg-card p-2 text-muted-foreground shadow-sm"
        onClick={toggle}
      >
        <Menu size={26} />
      </button>

      <div
        className={`fixed left-0 top-0 z-50 flex h-full w-full transform flex-col bg-background transition-all duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-20 w-full items-center justify-end border-b border-border max-width">
          <button className="text-primary transition-colors hover:text-foreground" onClick={toggle}>
            <X size={36} />
          </button>
        </div>

        <nav className="flex flex-1 flex-col items-center justify-center gap-10">
          <ul className="flex flex-col gap-5">
            {navLinks.map((link, index) => (
              <li key={index} onClick={toggle}>
                <NavLink href={link.url} label={link.label} classname="text-center text-3xl" />
              </li>
            ))}
            <Link href={whatsappUrl} className="btn btn-primary">
              <Phone size={24} />
              Fale Comigo
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;

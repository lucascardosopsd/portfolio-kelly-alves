"use client";
import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./CustomLink";
import { navLinks } from "../constants";

const MobileMenu = ({ whatsappUrl }: { whatsappUrl: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="tablet:hidden">
      {/* Toggle */}
      <button
        className="text-beige bg-beige-200 p-2 rounded border border-beige"
        onClick={toggle}
      >
        <Menu size={26} />
      </button>

      {/* Content */}

      <div
        className={`w-full h-full flex flex-col bg-beige fixed top-0 left-0 z-50 transition-all duration-300 ease-in-out transform ${
          isOpen ? "-translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex w-full items-center justify-end h-20 max-width border-b border-beige">
          <div className="flex items-center justify-center">
            <button
              className="text-grey-700 hover:text-purple transition-colors text-beige-600"
              onClick={toggle}
            >
              <X size={36} />
            </button>
          </div>
        </div>

        <nav className="flex flex-col items-center justify-center flex-1 gap-10">
          <ul className="flex flex-col gap-5">
            {navLinks.map((link, index) => (
              <li key={index} onClick={toggle}>
                <NavLink
                  href={link.url}
                  label={link.label}
                  classname="text-3xl text-center"
                />
              </li>
            ))}
            <Link
              href="https://api.whatsapp.com/send?phone=5517996484654"
              className="btn btn-primary"
            >
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

"use client";
import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./CustomLink";
import { navLinks, socialLinks } from "../constants";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="tablet:hidden">
      {/* Toggle */}
      <button className="text-white bg-purple p-4 rounded" onClick={toggle}>
        <Menu />
      </button>

      {/* Content */}

      <div
        className={`w-full h-full flex flex-col bg-peach-600 fixed top-0 left-0 z-50 transition-all duration-300 ease-in-out transform ${
          isOpen ? "-translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex w-full items-center justify-between h-20 max-width border-b border-peach">
          <Link href="/">
            <h5 className="text-purple text-xl font-semibold">Lucas Cardoso</h5>
          </Link>
          <div className="flex items-center justify-center">
            <button
              className="text-grey-700 hover:text-purple transition-colors"
              onClick={toggle}
            >
              <X />
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
                  classname="text-3xl"
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

        <div className="w-full h-20 flex items-center justify-around max-width border-t border-peach">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="text-grey-700 hover:text-purple transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;

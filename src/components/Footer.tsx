import CustomLink from "./CustomLink";
import { navLinks } from "../constants";
import { ProfileProps } from "@/types/profile";
import Link from "next/link";
import { CiFacebook, CiInstagram } from "react-icons/ci";
import { PiWhatsappLogoLight } from "react-icons/pi";

interface FooterProps {
  profileData: ProfileProps;
}

const Footer = ({ profileData }: FooterProps) => {
  return (
    <footer className="py-10 border-t border-beige max-width">
      <nav className="flex justify-center items-center gap-12 max-tablet:hidden">
        <ul className="flex items-center gap-8">
          {navLinks.map((link, index) => (
            <li key={index}>
              <CustomLink href={link.url} label={link.label} />
            </li>
          ))}
        </ul>
      </nav>

      {/* Contact Details */}

      <div className="flex flex-col tablet:flex-row items-center justify-center gap-2 mb-2">
        <div className="border border-beige text-beige-800 p-5 flex flex-col tablet:flex-row items-center rounded-lg min-h-16 text-center">
          {profileData.hours}
        </div>

        <div className="border border-beige text-beige-800 p-5 flex flex-col tablet:flex-row items-center rounded-lg h-16">
          {profileData.address}
        </div>

        <div className="flex flex-row gap-2 text-4xl tablet:text-2xl border border-beige text-beige-800 p-5 items-center rounded-lg h-16">
          <Link
            href={profileData.instagramUrl}
            className="hover:scale-125 transition"
          >
            <CiInstagram />
          </Link>

          <Link
            href={profileData.facebookUrl}
            className="hover:scale-125 transition"
          >
            <CiFacebook />
          </Link>

          <Link
            href={profileData.whatsappUrl}
            className="hover:scale-125 transition"
          >
            <PiWhatsappLogoLight />
          </Link>
        </div>
      </div>

      <Link href="https://lucascardoso.vercel.app/">
        <p className="text-beige-800 text-center text-sm">
          Desenvolvido por Lucas Cardoso | Clique e saiba mais
        </p>
      </Link>

      <p className="text-center mt-2 text-sm text-beige-800">
        Copyright © {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;

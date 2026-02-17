import { navLinks } from "../constants";
import { ProfileProps } from "@/types/profile";
import { CiFacebook, CiInstagram } from "react-icons/ci";
import { PiWhatsappLogoLight } from "react-icons/pi";
import Link from "next/link";
import CurrentYear from "./CurrentYear";
import CustomLink from "./CustomLink";

interface FooterProps {
  profileData: ProfileProps;
}

const Footer = ({ profileData }: FooterProps) => {
  return (
    <footer className="border-t border-border bg-surface-white py-14">
      <div className="space-y-8 max-width">
        <nav className="hidden items-center justify-center gap-12 tablet:flex">
          <ul className="flex items-center gap-8 text-sm font-semibold">
            {navLinks.map((link, index) => (
              <li key={index}>
                <CustomLink href={link.url} label={link.label} />
              </li>
            ))}
          </ul>
        </nav>

        <div className="grid grid-cols-1 gap-3 tablet:grid-cols-3">
          <div className="rounded-2xl border border-border bg-surface-brand-soft p-5 text-center text-muted-foreground">
            {profileData.hours}
          </div>

          <div className="rounded-2xl border border-border bg-surface-brand-soft p-5 text-center text-muted-foreground">
            {profileData.address}
          </div>

          <div className="flex items-center justify-center gap-3 rounded-2xl border border-border bg-surface-brand-soft p-5 text-3xl text-muted-foreground">
            <Link href={profileData.instagramUrl} className="transition hover:scale-110">
              <CiInstagram />
            </Link>
            <Link href={profileData.facebookUrl} className="transition hover:scale-110">
              <CiFacebook />
            </Link>
            <Link href={profileData.whatsappUrl} className="transition hover:scale-110">
              <PiWhatsappLogoLight />
            </Link>
          </div>
        </div>

        <Link href="https://lucascardoso.vercel.app/">
          <p className="text-center text-sm text-muted-foreground">
            Desenvolvido por Lucas Cardoso | Clique e saiba mais
          </p>
        </Link>

        <p className="mt-2 text-center text-sm text-muted-foreground">
          Copyright © <CurrentYear />
        </p>
      </div>
    </footer>
  );
};

export default Footer;

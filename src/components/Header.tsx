import NavLink from "./CustomLink";
import MobileMenu from "./MobileMenu";
import { navLinks } from "../constants";
import { ProfileProps } from "@/types/profile";

interface HeaderProps {
  profileData: ProfileProps;
}

const Header = async ({ profileData }: HeaderProps) => {
  return (
    <>
      <div className="flex w-full items-center">
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

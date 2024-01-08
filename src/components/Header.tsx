import NavLink from "./CustomLink";
import MobileMenu from "./MobileMenu";
import { navLinks } from "../constants";
import Headroom from "react-headroom";
import Logo from "./Logo";

const Header = () => {
  return (
    <>
      <div className="flex w-full items-center border-b border-peach">
        <Headroom className="w-full hidden tablet:block justify-end">
          <header className="flex items-center justify-between h-20 max-width w-full z-10 bg-peach-100">
            <Logo />
            <nav className="flex items-center gap-12 max-tablet:hidden">
              <ul className="flex items-center gap-8">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <NavLink href={link.url} label={link.label} />
                  </li>
                ))}
              </ul>
            </nav>
          </header>
        </Headroom>
      </div>
      <header className="w-full flex justify-end fixed z-50 top-2 right-2">
        <MobileMenu />
      </header>
    </>
  );
};

export default Header;

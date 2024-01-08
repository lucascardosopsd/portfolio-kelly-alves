import Link from "next/link";
import CustomLink from "./CustomLink";
import { contactDetails, navLinks, socialLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="py-10 border-t border-peach max-width">
      <div className="flex item-center justify-between">
        <Link href="/" className="text-purple text-xl font-semibold">
          Lucas Cardoso
        </Link>
        <nav className="flex gap-12 max-tablet:hidden">
          <ul className="flex items-center gap-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <CustomLink href={link.url} label={link.label} />
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex gap-3">
          {socialLinks.map((link, index) => (
            <a
              href={link.url}
              key={index}
              className="w-10 h-10 bg-purple text-peach flex items-center justify-center rounded"
            >
              <link.icon strokeWidth={0} fill="currentColor" />
            </a>
          ))}
        </div>
      </div>

      {/* Contact Details */}

      <div className="w-max border border-peach p-5 mx-auto flex gap-5 tablet:gap-10 flex-col tablet:flex-row items-center rounded-lg mt-5">
        {contactDetails.map((detail, index) => (
          <div key={index} className="flex gap-3 items-center text-purple ">
            <detail.icon size={20} />
            <p className="text-grey-600">{detail.text}</p>
          </div>
        ))}
      </div>

      <p className="text-center mt-2 text-sm">
        Copyright © {new Date().getFullYear()} Lucas Cardoso
      </p>
    </footer>
  );
};

export default Footer;

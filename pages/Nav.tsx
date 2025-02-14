import { Bars3CenterLeftIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Props {
  openNav: () => void;
}

const NAV_LINKS = [
  { name: "Home", path: "#home" },
  { name: "About", path: "#about" },
  { name: "Services", path: "#services" },
  { name: "Skills", path: "#skills" },
  { name: "Projects", path: "#project" },
  { name: "Contact", path: "#contact" },
];

const Nav = ({ openNav }: Props) => {
  const [navSticky, setNavSticky] = useState(false);

  useEffect(() => {
    const handler = () => {
      setNavSticky(window.scrollY >= 90);
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const smoothScroll = (event: Event) => {
      const target = event.target as HTMLElement;
      if (target.tagName === "A") {
        const href = (target as HTMLAnchorElement).getAttribute("href");
        if (href && href.startsWith("#")) {
          event.preventDefault();
          const section = document.querySelector(href);
          if (section) {
            window.scrollTo({
              top: section.getBoundingClientRect().top + window.scrollY - 80, // Adjust for navbar height
              behavior: "smooth",
            });
          }
        }
      }
    };

    document.addEventListener("click", smoothScroll);
    return () => document.removeEventListener("click", smoothScroll);
  }, []);

  const stickyStyle = navSticky ? "bg-[#212428] shadow-gray-900 shadow-sm" : "";

  return (
    <div
      className={`fixed w-[100%] ${stickyStyle} transition-all duration-300 z-[1000] `}
    >
      <div className="flex items-center h-[12vh] justify-between w-[80%] mx-auto">
        <div className="font-logo text-white text-[18px]">
          <span className="text-[30px] md:text-[40px] text-yellow-400">GN</span>
          Dev
        </div>
        <ul className="md:flex hidden items-center space-x-10">
          {NAV_LINKS.map(({ name, path }) => (
            <li key={name}>
              <Link className="nav__link" href={path}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
        <Bars3CenterLeftIcon
          onClick={openNav}
          className="w-[2.3rem] md:hidden h-[2.3rem] text-white rotate-180 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Nav;

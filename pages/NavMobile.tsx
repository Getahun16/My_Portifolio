import { XMarkIcon } from "@heroicons/react/16/solid";
import React from "react";

interface Props {
  showNav: boolean;
  closeNav: () => void;
}

const NAV_LINKS = [
  { name: "Home", path: "#home" },
  { name: "About", path: "#about" },
  { name: "Services", path: "#services" },
  { name: "Skills", path: "#skills" },
  { name: "Projects", path: "#project" },
  { name: "Contact", path: "#contact" },
];

const NavMobile = ({ closeNav, showNav }: Props) => {
  return (
    <div>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-60 transition-opacity ${
          showNav ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeNav} // Close when clicking outside
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[70%] max-w-[320px] bg-[#1a1a2e] bg-opacity-90 backdrop-blur-md shadow-lg transform ${
          showNav ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out flex flex-col items-center justify-center space-y-8 z-[10000]`}
      >
        {/* Close Button */}
        <XMarkIcon
          onClick={closeNav}
          className="absolute top-4 right-4 w-8 h-8 text-gray-300 hover:text-white transition cursor-pointer"
        />

        {/* Navigation Links */}
        <ul className="flex flex-col space-y-6">
          {NAV_LINKS.map(({ name, path }) => (
            <li key={name} className="text-white text-xl font-medium">
              <a
                className="relative inline-block px-4 py-2 transition-transform duration-200 hover:scale-110 hover:text-yellow-400"
                href={path}
                onClick={closeNav}
              >
                {name}
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-yellow-400 scale-x-0 transition-transform duration-200 hover:scale-x-100"></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavMobile;

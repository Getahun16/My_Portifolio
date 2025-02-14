import React from "react";

const Footer = () => {
  return (
    <div className="bg-black pt-16 pb-8">
      <div className="flex justify-center gap-4 text-gray-300 text-sm font-semibold">
        <h5 className="hover:text-yellow-400 transition-colors duration-300">
          &copy; {new Date().getFullYear()}
          <span className="text-yellow-400"> Getahun Negash </span>
        </h5>
        <h5 className="hover:text-yellow-400 transition-colors duration-300">
          All Rights Reserved.
        </h5>
      </div>
    </div>
  );
};

export default Footer;

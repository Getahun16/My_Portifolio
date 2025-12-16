import React from "react";
import { TypeAnimation } from "react-type-animation";
const TypeWriterEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Software Engineer",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        "Full-Stack Developer",
        1000,
        "WordPress Developer",
        1000,
        "Next.Js Developer",
        1000,
        "Vue.Js Developer",
        1000,
        "Laravel Developer",
        1000,
        "MERN Developer",
        1000,
      ]}
      wrapper="span"
      speed={50}
      className="xl:text-[40px] lg:text-[35px] sm:text-[30px] text-[20px] text-white font-bold"
      repeat={Infinity}
    />
  );
};

export default TypeWriterEffect;

import {
  BugAntIcon,
  CodeBracketIcon,
  CommandLineIcon,
  CursorArrowRaysIcon,
  RocketLaunchIcon,
  ServerIcon,
} from "@heroicons/react/16/solid";
import React from "react";

interface Props {
  title: string;
  num: string;
}

const iconMapping = {
  "01": CommandLineIcon, // Step 1: React Website
  "02": CodeBracketIcon, // Step 2: Next.js
  "03": CursorArrowRaysIcon, // Step 3: Full-stack
  "04": ServerIcon, // Step 4: Vue.js
  "05": RocketLaunchIcon, // Step 5: MERN Stack
  "06": BugAntIcon, // Step 6: Bug Fixing
};

// Step-based descriptions
const descriptionMapping: Record<string, string> = {
  "01": " Build fast, interactive, and responsive React websites with modern UI/UX principles.",
  "02": " Leverage Next.js for SEO-friendly, high-performance apps with server-side rendering (SSR).",
  "03": "Develop full-stack applications using React, Node.js, and databases for seamless integration.",
  "04": " Create dynamic Vue.js applications with reactivity and maintainable architecture.",
  "05": "Build scalable MERN stack applications with authentication, APIs, and cloud deployment.",
  "06": " Debug and optimize performance issues, ensuring smooth and error-free applications.",
};

const ServiceCard = ({ num, title }: Props) => {
  const IconComponent = iconMapping[num] || CommandLineIcon;
  const description =
    descriptionMapping[num] || "Providing high-quality software solutions.";

  return (
    <div className="bg-black custom__service z-[100] relative transform rounded-2xl text-center p-6 shadow-md">
      <IconComponent className="w-[5rem] relative z-[1] mx-auto h-[5rem] text-yellow-400" />
      <h1 className="text-[25px] relative z-[1] text-white mt-[1rem]">
        {title}
      </h1>
      <p className="text-white text-[15px] opacity-60 mt-[0.8rem] leading-relaxed">
        {description}
      </p>
      <p className="text-white text-[1.6rem] font-bold absolute top-3 right-3">
        {num}
      </p>
    </div>
  );
};

export default ServiceCard;

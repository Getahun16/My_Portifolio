import {
  BugAntIcon,
  CodeBracketIcon,
  CommandLineIcon,
  CursorArrowRaysIcon,
  RocketLaunchIcon,
  ServerIcon,
} from "@heroicons/react/16/solid";
import { FaWordpress } from "react-icons/fa";
import React from "react";

interface Props {
  title: string;
  num: "01" | "02" | "03" | "04" | "05" | "06"; // Explicitly define num as one of these string literals
}

const iconMapping: Record<
  "01" | "02" | "03" | "04" | "05" | "06",
  React.ComponentType<any>
> = {
  // Front-End Development
  "01": CommandLineIcon,
  // Full-Stack Web Applications
  "02": CodeBracketIcon,
  // Back-End Development (use server icon for clarity)
  "03": ServerIcon,
  // Maintenance & Optimization (use bug icon to imply fixes)
  "04": BugAntIcon,
  // E-Commerce Solutions (launch icon to suggest go-to-market)
  "05": RocketLaunchIcon,
  // WordPress Development
  "06": FaWordpress,
};

// Step-based descriptions
const descriptionMapping: Record<string, string> = {
  "01": "Creating responsive, interactive, and user-friendly interfaces using Vue, React, Next.js, and modern front-end technologies.",
  "02": "Developing end-to-end web applications with React, Node.js, and databases for seamless integration.",
  "03": "Building robust, scalable server-side systems, APIs, and databases to power web applications.",
  "04": "Ensuring fast, secure, and up-to-date websites with regular maintenance and performance improvements.",
  "05": "Creating WooCommerce stores or full-stack e-commerce apps with smooth payment and management integration.",
  "06": "Developing and customizing responsive WordPress websites with themes, plugins, and SEO optimization.",
};

const ServiceCard = ({ num, title }: Props) => {
  const IconComponent = iconMapping[num] || CommandLineIcon;
  const description =
    descriptionMapping[num] || "Providing high-quality software solutions.";

  return (
    <div className="bg-black custom__service z-[100] relative transform rounded-2xl text-center p-6 shadow-md">
      <IconComponent
        className="w-[5rem] relative z-[1] mx-auto h-[5rem] text-yellow-400"
        role="img"
        aria-label={title}
      />
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

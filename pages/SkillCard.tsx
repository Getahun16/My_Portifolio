import Image from "next/image";
import React from "react";

interface SkillProps {
  title: string;
  image: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
}

const SkillCard = ({ title, image, level }: SkillProps) => {
  return (
    <div className="w-40 mx-auto sm:w-full bg-gray-900 rounded-lg p-2 sm:p-3 text-center shadow-md hover:scale-105 transition-transform duration-300">
      <Image
        src={image}
        alt={title}
        width={48}
        height={48}
        className="mx-auto w-10 h-10 sm:w-14 sm:h-14"
      />
      <h2 className="text-white text-sm sm:text-base font-semibold mt-2 sm:mt-3">
        {title}
      </h2>
      <p className="text-yellow-400 font-medium text-xs sm:text-sm mt-1">
        {level}
      </p>
    </div>
  );
};

export default SkillCard;

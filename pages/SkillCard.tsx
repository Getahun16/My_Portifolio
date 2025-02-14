import Image from "next/image";
import React from "react";

interface SkillProps {
  title: string;
  image: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
}

const SkillCard = ({ title, image, level }: SkillProps) => {
  return (
    <div className="bg-gray-900 rounded-2xl p-6 text-center shadow-md hover:scale-105 transition-transform duration-300">
      <Image
        src={image}
        alt={title}
        width={64}
        height={64}
        className="mx-auto"
      />
      <h2 className="text-white text-xl font-semibold mt-4">{title}</h2>
      <p className="text-yellow-400 font-medium mt-2">{level}</p>
    </div>
  );
};

export default SkillCard;

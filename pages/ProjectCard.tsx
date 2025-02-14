import Image from "next/image";
import React from "react";
import { FaGithub } from "react-icons/fa"; // Import GitHub Icon

interface Props {
  image: string;
  title: string;
  githubLink: string;
}

const ProjectCard = ({ image, title, githubLink }: Props) => {
  return (
    <div className="items-center">
      <div className="p-4 rounded-xl relative cursor-pointer hover:-rotate-6 transform transition-all duration-300 bg-gray-800 shadow-md">
        <Image
          src={`${image}`}
          alt={title}
          width={400}
          height={400}
          className="object-contain rounded-xl mx-auto shadow-md"
        />
        <h1 className="text-[25px] text-white text-center mt-4">{title}</h1>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-300 mt-3 inline-block text-center"
        >
          <FaGithub size={24} /> View on GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;

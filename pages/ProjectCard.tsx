import React from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  image: string;
  githubLink: string;
  liveLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  image,
  githubLink,
  liveLink,
}) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02] h-full flex flex-col">
      <div className="relative w-full h-48 overflow-hidden shrink-0">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 ease-out hover:scale-105"
        />
      </div>
      <div className="p-6 text-center flex-1 flex flex-col justify-between">
        <h3 className="text-white text-xl font-semibold">{title}</h3>
        <div className="mt-4 flex justify-center space-x-4">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white flex items-center gap-2 transition-colors"
          >
            <FaGithub size={20} /> GitHub
          </a>
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:text-yellow-300 flex items-center gap-2 transition-colors"
            >
              <FaExternalLinkAlt size={18} /> Live Site
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

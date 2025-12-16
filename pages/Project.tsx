import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import ProjectCard from "./ProjectCard";

const Project = () => {
  const projectsData = [
    {
      title: "E-Commerce website",
      image: "/images/p1.PNG",
      githubLink: "https://github.com/Getahun16/Furniture-store",
      liveLink: "https://furniture-store-react-project-getahun.netlify.app/",
    },
    {
      title: "Dagu Sport",
      image: "/images/dagu.jpg",
      githubLink: "https://github.com/Getahun16 ",
      liveLink: "https://dagusports.com/",
    },
    {
      title: "Akaki Adventist School",
      image: "/images/mission.jpg",
      githubLink: "https://github.com/Getahun16 ",
      liveLink: "https://degantechnologies.com/software/",
    },
    {
      title: "Kerero Furniture",
      image: "/images/kerero.jpg",
      githubLink: "https://github.com/Getahun16 ",
      liveLink: "https://ethiopiankidneyassociation.et/furniture/",
    },
    {
      title: "Car-Rent website",
      image: "/images/p2.PNG",
      githubLink: "https://github.com/Getahun16/car__rent_show",
      liveLink:
        "https://car-rent-show-re5gjx333-getahun16s-projects.vercel.app/",
    },
    {
      title: "Tomato Website",
      image: "/images/tomato.png",
      githubLink:
        "https://github.com/Getahun16/MERN-Stack-tomato-product-project",
      liveLink: "https://tomato-product.vercel.app/",
    },
    {
      title: "Food Website",
      image: "/images/food.png",
      githubLink: "https://github.com/Getahun16/Next-Foodies-app",
      liveLink: "https://food-app-next-js-project.netlify.app/",
    },
    {
      title: "Gym Website",
      image: "/images/gym.png",
      githubLink: "https://github.com/Getahun16/gym-web-project",
      liveLink: "https://gym-website-getahun.netlify.app/",
    },
  ];

  const PROJECTS_PER_PAGE = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(projectsData.length / PROJECTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const endIndex = startIndex + PROJECTS_PER_PAGE;
  const currentProjects = projectsData.slice(startIndex, endIndex);

  return (
    <div className="pt-[5rem] pb-[3rem] bg-gray-900">
      <div className="text-center">
        <p className="heading__mini">Recent Works</p>
        <h1 className="heading__primary">
          My Best <span className="text-yellow-300">Projects</span>
        </h1>
      </div>
      <div className="pt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] items-stretch">
        {currentProjects.map((project, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            data-aos-anchor-placement="top-center"
            className="h-full"
          >
            <ProjectCard
              title={project.title}
              image={project.image}
              githubLink={project.githubLink}
              liveLink={project.liveLink}
            />
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-[3rem]">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-yellow-300 text-gray-900 font-bold rounded-lg hover:bg-yellow-400 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            Previous
          </button>

          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-2 rounded-lg font-bold transition ${
                  currentPage === page
                    ? "bg-yellow-300 text-gray-900"
                    : "bg-gray-700 text-yellow-300 hover:bg-gray-600"
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={() =>
              setCurrentPage(Math.min(totalPages, currentPage + 1))
            }
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-yellow-300 text-gray-900 font-bold rounded-lg hover:bg-yellow-400 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Project;

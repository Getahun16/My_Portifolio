import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-gray-900">
      <div className="text-center">
        <p className="heading__mini">Recent Works</p>
        <h1 className="heading__primary">
          My Best <span className="text-yellow-300">Projects</span>
        </h1>
      </div>
      <div className="pt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] items-center">
        <ProjectCard
          title="E-Commerce website"
          image="/images/p1.PNG"
          githubLink="https://github.com/Getahun16/Furniture-store"
          liveLink="https://furniture-store-react-project-getahun.netlify.app/"
        />
        <ProjectCard
          title="Dagu Sport"
          image="/images/dagu.jpg" // Add your image path
          githubLink="https://github.com/Getahun16 " // Replace with actual repo if different
          liveLink="https://dagusports.com/" // Replace with live URL
        />

        <ProjectCard
          title="Akaki Adventist School"
          image="/images/mission.jpg" // Add your image path
          githubLink="https://github.com/Getahun16 " // Replace with actual repo
          liveLink="https://degantechnologies.com/software/" // Replace with live URL
        />

        <ProjectCard
          title="Kerero Furniture"
          image="/images/kerero.jpg" // Add your image path
          githubLink="https://github.com/Getahun16 " // Replace with actual repo
          liveLink="https://ethiopiankidneyassociation.et/furniture/" // Replace with live URL
        />
        <ProjectCard
          title="Car-Rent website"
          image="/images/p2.PNG"
          githubLink="https://github.com/Getahun16/car__rent_show"
          liveLink="https://car-rent-show-re5gjx333-getahun16s-projects.vercel.app/"
        />
        <ProjectCard
          title="Tomato Website"
          image="/images/tomato.png"
          githubLink="https://github.com/Getahun16/MERN-Stack-tomato-product-project"
          liveLink="https://tomato-product.vercel.app/"
        />
        <ProjectCard
          title="Food Website"
          image="/images/food.png"
          githubLink="https://github.com/Getahun16/Next-Foodies-app"
          liveLink="https://food-app-next-js-project.netlify.app/"
        />
        <ProjectCard
          title="Gym Website"
          image="/images/gym.png"
          githubLink="https://github.com/Getahun16/gym-web-project"
          liveLink="https://gym-website-getahun.netlify.app/"
        />
      </div>
    </div>
  );
};

export default Project;

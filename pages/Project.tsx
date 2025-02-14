import React from "react";
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
          githubLink="https://github.com/Getahun16/Furniture-store" // Add GitHub link
        />
        <ProjectCard
          title="Car-Rent website"
          image="/images/p2.PNG"
          githubLink="https://github.com/Getahun16/car__rent_show" // Add GitHub link
        />
        <ProjectCard
          title="Tomato Website"
          image="/images/tomato.png"
          githubLink="https://github.com/Getahun16/MERN-Stack-tomato-product-project" // Add GitHub link
        />
        <ProjectCard
          title="Food Website"
          image="/images/food.png"
          githubLink="https://github.com/Getahun16/Next-Foodies-app" // Add GitHub link
        />
        <ProjectCard
          title="Gym Website"
          image="/images/gym.png"
          githubLink="https://github.com/Getahun16/gym-web-project" // Add GitHub link
        />
      </div>
    </div>
  );
};

export default Project;

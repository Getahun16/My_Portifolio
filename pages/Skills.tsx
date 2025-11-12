import React from "react";
import SkillCard from "./SkillCard";

const Skills = () => {
  // Explicitly typing the 'level' property of each skill as a string literal type
  const skills = [
    { title: "HTML", image: "/images/html.svg", level: "Expert" },
    { title: "CSS", image: "/images/css.svg", level: "Expert" },
    { title: "JavaScript", image: "/images/js.svg", level: "Advanced" },
    { title: "Wordpress", image: "/images/wordpress.webp", level: "Advanced" },
    { title: "React", image: "/images/react.svg", level: "Advanced" },
    { title: "TypeScript", image: "/images/ts.svg", level: "Intermediate" },
    { title: "Node.js", image: "/images/node.svg", level: "Intermediate" },
    { title: "Vue.js", image: "/images/vue.png", level: "Advanced" },
    { title: "Laravel", image: "/images/laravel.png", level: "Intermediate" },
  ] as {
    title: string;
    image: string;
    level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  }[]; // Type the entire array

  return (
    <div className="py-20 bg-gradient-to-b from-[#0f0f0f] to-black">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-7 gap-12 items-center">
        {/* Left Section */}
        <div className="col-span-3 space-y-6">
          <p className="text-lg font-semibold text-yellow-400 uppercase tracking-wide">
            My Skills
          </p>
          <h1 className="text-4xl font-extrabold text-white leading-tight">
            Let&apos;s Explore{" "}
            <span className="text-yellow-400">Popular Skills</span>
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            Results-oriented software developer with a strong background in
            front-end and back-end development.
          </p>
          <button className="relative mt-4 flex items-center justify-center px-6 py-3 font-semibold text-white bg-yellow-500 rounded-full shadow-lg transition-all hover:bg-yellow-600 hover:scale-105">
            Learn More
          </button>
        </div>

        {/* Right Section - Skill Cards */}
        <div className="col-span-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.title}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <SkillCard {...skill} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

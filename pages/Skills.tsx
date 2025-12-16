import React, { useState, useEffect, useRef } from "react";
import SkillCard from "./SkillCard";

const Skills = () => {
  // Explicitly typing the 'level' property of each skill as a string literal type
  const skills = [
    { title: "Wordpress", image: "/images/wordpress.webp", level: "Expert" },
    { title: "HTML", image: "/images/html.svg", level: "Expert" },
    { title: "CSS", image: "/images/css.svg", level: "Expert" },
    { title: "JavaScript", image: "/images/js.svg", level: "Advanced" },
    { title: "React", image: "/images/react.svg", level: "Advanced" },
    { title: "Next.js", image: "/images/nextjs.webp", level: "Advanced" },
    { title: "TypeScript", image: "/images/ts.svg", level: "Intermediate" },
    { title: "Node.js", image: "/images/node.svg", level: "Intermediate" },
    { title: "MySQL", image: "/images/mysql.png", level: "Intermediate" },
    { title: "MongoDB", image: "/images/mongo.png", level: "Intermediate" },
    { title: "Vue.js", image: "/images/vue.png", level: "Advanced" },
    { title: "Laravel", image: "/images/laravel.png", level: "Intermediate" },
  ] as {
    title: string;
    image: string;
    level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  }[]; // Type the entire array

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);
  const isPausedRef = useRef(false);
  const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth < 640) setItemsPerSlide(1);
      else if (window.innerWidth < 1024) setItemsPerSlide(2);
      else setItemsPerSlide(3);
    };

    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  const maxIndex = Math.max(0, Math.ceil(skills.length / itemsPerSlide) - 1);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const visibleSkills = skills.slice(
    currentIndex * itemsPerSlide,
    currentIndex * itemsPerSlide + itemsPerSlide
  );

  // Autoplay: advance slides every 4s, pause on hover
  useEffect(() => {
    if (autoplayIntervalRef.current) {
      clearInterval(autoplayIntervalRef.current);
    }
    autoplayIntervalRef.current = setInterval(() => {
      if (!isPausedRef.current) {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
      }
    }, 4000);

    return () => {
      if (autoplayIntervalRef.current) {
        clearInterval(autoplayIntervalRef.current);
      }
    };
  }, [maxIndex]);

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

        {/* Right Section - Skill Carousel */}
        <div className="col-span-4 mr-5  ">
          <div
            className="relative"
            onMouseEnter={() => {
              isPausedRef.current = true;
            }}
            onMouseLeave={() => {
              isPausedRef.current = false;
            }}
          >
            {/* Carousel Container with side padding to avoid arrow overlap */}
            <div className="overflow-hidden px-6 sm:px-8 lg:px-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 transition-all duration-500">
                {visibleSkills.map((skill, index) => (
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

            {/* Navigation Buttons */}
            {maxIndex > 0 && (
              <>
                <button
                  onClick={prevSlide}
                  className="flex absolute left-1 sm:left-0 lg:-left-12 top-1/2 -translate-y-1/2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full w-9 h-9 sm:w-10 sm:h-10 items-center justify-center transition-all z-10 shadow-md"
                  aria-label="Previous skills"
                >
                  ❮
                </button>
                <button
                  onClick={nextSlide}
                  className="flex absolute right-1 sm:right-0 lg:-right-12 top-1/2 -translate-y-1/2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full w-9 h-9 sm:w-10 sm:h-10 items-center justify-center transition-all z-10 shadow-md"
                  aria-label="Next skills"
                >
                  ❯
                </button>
              </>
            )}

            {/* Pagination Dots */}
            {maxIndex > 0 && (
              <div className="flex justify-center items-center gap-2 mt-6">
                {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? "bg-yellow-500 w-6"
                        : "bg-gray-600 hover:bg-gray-500"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

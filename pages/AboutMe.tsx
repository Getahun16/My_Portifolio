import { CheckIcon } from "@heroicons/react/16/solid";
import React from "react";

const AboutMe = () => {
  return (
    <div className="mt-[-4rem] bg-black pb-[3rem]">
      <div className="w-[80%] pt-[5rem] sm:pt-[7rem] md:pt-[10rem] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-[2rem]">
        <div>
          <p className="heading__mini text-yellow-400">About Me</p>
          <h1 className="heading__primary text-white">
            Full-Stack Expertise for Modern Web & WordPress Development
          </h1>
          <p className="text-[15px] mt-[1.3rem] text-white opacity-75 max-w-[450px] mx-auto">
            I’m a Senior Full-Stack Developer and WordPress Expert with
            experience in custom WordPress development, React, Next.js, and the
            MERN stack. I specialize in building scalable, secure, and
            user-friendly web applications, delivering high-performing digital
            solutions that transform ideas into reality.
          </p>
          <div className="mt-[2rem] space-y-3">
            <div className="flex items-center space-x-4">
              <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
              <p className="text-[18px] text-white">Frontend Development</p>
            </div>
            <div className="flex items-center space-x-4">
              <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
              <p className="text-[18px] text-white">Backend Development</p>
            </div>
            <div className="flex items-center space-x-4">
              <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
              <p className="text-[18px] text-white">WordPress Development</p>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="600"
              data-aos-anchor-placement="top-center"
              className="flex items-center space-x-4"
            >
              <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
              <p className="text-[18px] text-white">MERN Development</p>
            </div>
          </div>
        </div>
        <div className="lg:ml-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-stretch gap-[2rem]">
            <div
              data-aos="zoom-in"
              data-aos-anchor-placement="top-center"
              className="p-6 text-center bg-yellow-500 rounded-lg shadow-lg h-full min-h-[10rem] flex flex-col justify-center"
            >
              <p className="text-[40px] text-black font-bold">2+</p>
              <p className="text-[20px] text-black font-semibold">
                Year Experience
              </p>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="200"
              data-aos-anchor-placement="top-center"
              className="p-6 text-center bg-yellow-500 rounded-lg shadow-lg h-full min-h-[10rem] flex flex-col justify-center"
            >
              <p className="text-[40px] text-black font-bold">6</p>
              <p className="text-[20px] text-black font-semibold">
                Happy Clients
              </p>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="400"
              data-aos-anchor-placement="top-center"
              className="p-6 text-center bg-yellow-500 rounded-lg shadow-lg h-full min-h-[10rem] flex flex-col justify-center"
            >
              <p className="text-[40px] text-black font-bold">13+</p>
              <p className="text-[20px] text-black font-semibold">
                Projects Done
              </p>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="600"
              data-aos-anchor-placement="top-center"
              className="p-6 text-center bg-yellow-500 rounded-lg shadow-lg h-full min-h-[10rem] flex flex-col justify-center"
            >
              <p className="text-[40px] text-black font-bold">3</p>
              <p className="text-[20px] text-black font-semibold">Awards Won</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

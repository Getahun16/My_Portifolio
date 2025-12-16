import React from "react";

import Link from "next/link";
import Image from "next/image";
import TypeWriterEffect from "./TypeWriterEffect";

const Hero = () => {
  return (
    <div className="w-[100vw] pt-[4vh] md:pt-[12vh] h-[100vh] md:h-[100vh] custom-bg">
      <div className="flex justify-center flex-col w-[80%] h-[100%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[5rem] items-center ">
          <div>
            <h1 data-aos="fade-right" className="text-[#c4cfde] mb-[1.3rem]">
              WELCOME TO MY WORLD
            </h1>
            <div data-aos="fade-left" data-aos-delay="400">
              <h1 className="xl:text-[50px] lg:text-[40px] sm:text-[35px]  text-[25px] font-semibold leading-[2.6rem] text-white">
                Hi, I’m <span className="text-yellow-300">Getahun</span>
              </h1>
              <TypeWriterEffect />
            </div>
            <p
              data-aos="fade-up"
              data-aos-delay="800"
              className="mt-[1.2rem] text-[15px] md:text-[17px] text-[#c4cfde]"
            >
              Welcome! Make yourself at home as you explore my work. I’m a
              WordPress Expert and Senior Full-Stack Software Developer with a
              proven track record of delivering high-quality, scalable, and
              user-focused solutions. I build modern, fast, and secure websites
              and web applications, turning ideas into reliable digital products
              you can trust.
            </p>
            <div className="mt-[2rem] flex items-center space-x-6">
              <Link href="/images/geta.pdf" download="CV" target="_blank">
                <button
                  data-aos="zoom-out"
                  data-aos-delay="1600"
                  className="before:ease relative h-12 w-40 overflow-hidden bg-orange-600 text-white font-semibold shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:rotate-90 before:bg-green-700 before:transition-all before:duration-500 hover:text-white hover:shadow-black hover:before:-rotate-180"
                >
                  <span className="relative z-10">Download CV</span>
                </button>
              </Link>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="2000"
            className="hidden md:block"
          >
            <Image
              src="/images/getah.jpg"
              alt="image"
              width={450}
              height={600}
              className="object-contain "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-[#0b0c13] relative z-10">
      <div className="text-center">
        <p className="heading__mini">Popular Services</p>
        <h1 className="heading__primary">
          My Special <span className="text-yellow-300">Services</span> For You
        </h1>
      </div>
      <div className="pt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] items-center">
        <div data-aos="fade-up" data-anchor-placement="top-center">
          <ServiceCard title="Front-End Development" num="01" />
        </div>
        <div
          data-aos="fade-up"
          data-anchor-placement="top-center"
          data-aos-delay="200"
        >
          <ServiceCard title="Full-Stack Web Applications" num="02" />
        </div>
        <div
          data-aos="fade-up"
          data-anchor-placement="top-center"
          data-aos-delay="400"
        >
          <ServiceCard title="Back-End Development" num="03" />
        </div>
        <div
          data-aos="fade-up"
          data-anchor-placement="top-center"
          data-aos-delay="600"
        >
          <ServiceCard title="Website Maintenance & Optimization" num="04" />
        </div>
        <div
          data-aos="fade-up"
          data-anchor-placement="top-center"
          data-aos-delay="800"
        >
          <ServiceCard title="E-Commerce Solutions" num="05" />
        </div>
        <div
          data-aos="fade-up"
          data-anchor-placement="top-center"
          data-aos-delay="1000"
        >
          <ServiceCard title="Wordpress development" num="06" />
        </div>
      </div>
    </div>
  );
};

export default Services;

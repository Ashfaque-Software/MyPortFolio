import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Experience = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  // Define the new experience
  const experience = {
    date: "November 2020 - November 2022",
    company: "Jazal Engineering & Contracting, UAE",
    position: "Material Assistant",
    description:
      "Worked as a Material Assistant in Jazal Engineering & Contracting, UAE from November 2020 to November 2022.",
  };

  return (
    <div
      name="experience"
      className="min-h-screen bg-gradient-to-l from-[#21073C] to-[#3A1078] text-gray-300 py-32"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center  h-full text-white">
        <div>
          <h1 className="text-4xl font-bold inline border-b-4 border-[#00FFCA]">
            Experience
          </h1>
          <p className="text-xl py-6">
            Experienced professional with a proven track record of success
          </p>
        </div>
        <div className="w-full sm:w-full md:w-12/12 mt-5">
          {/* Render the new experience */}
          <div
            className="relative flex flex-col p-3.5 border-white md:border-b-4 md:items-start"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            {/* Date */}
            <h1 className="absolute top-0 bg-white w-max p-2.5 text-[#3A1078] dark:text-[#21073C] shadow-2xl text-2xl left-0">
              {experience.date}
            </h1>
            {/* Company */}
            <h1 className="pt-14 font-bold text-3xl">{experience.company}</h1>
            {/* Position */}
            <h2 className="text-xl font-bold text-[#00FFCA] py-1">
              {experience.position}
            </h2>
            {/* Description */}
            <p className="text-lg mt-1 leading-8">{experience.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

import React from "react";
import { Skillset } from "../constants";

const Skills = () => {
  return (
    <>
      <div className="text-xl relative text-center p-8 flex flex-col gap-4 sm:p-10 sm:text-4xl sm:gap-12 md:p-14 md:text-3xl lg:text-lg lg:p-10 xl:text-2xl">
        <h2 className="text-3xl font-bold sm:text-5xl">My Technology Stack</h2>
        <p className=" text-slate-300">
          Here are some of the technologies and tools that I have experience
          with and use regularly in my projects.
        </p>
        <div className="flex flex-row flex-wrap justify-center gap-8">
          {Skillset.map((link) => (
            <div
              key={link.skillID}
              className="w-32 flex flex-col items-center justify-center gap-1 border border-white p-3 border-opacity-25 rounded-xl sm:p-6 sm:w-44 lg:w-32"
            >
              <span className="text-6xl hover:text-sky-400 ease-in-out">
                {link.icon}
              </span>
              <p className="overflow-hidden w-full">{link.skill}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
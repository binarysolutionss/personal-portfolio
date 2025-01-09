import React from "react";
import avatar from "../assets/images/vector images/avatar.png";
import { Link, useLocation } from "react-router-dom";

const Information = () => {
  return (
    <>
      <div className="text-xl p-8 sm:p-10 sm:text-4xl sm:gap-1 md:p-14 md:text-3xl lg:text-lg lg:p-10 xl:text-2xl border-b border-sky-400 border-opacity-25">
        <div className="flex flex-col gap-4 text-center items-center sm:gap-8 lg:flex-row xl:gap-8">
          <img
            src={avatar}
            alt="Avatar"
            className="w-3/4 sm:w-2/3 lg:w-80"
          ></img>
          <div className="text-center flex flex-col gap-4 sm:gap-6 xl:gap-8 xl:text-start">
            <h4 className="text-3xl font-bold sm:text-5xl">About Me</h4>
            <p className=" text-slate-300">
              I'm Stanley Chiremba, a software engineer and creative designer. 
              A recent graduate from Africa University with a Bachelor of Science in Software Engineering,
              my forte is designing, prototyping and building web, software and
              design solutions using modern technologies.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8 xl:justify-start">
              <button className="rounded-lg px-6 py-3 font-medium bg-sky-400 text-slate-900 hover:bg-sky-300">
                <Link to="/projects">Projects</Link>
              </button>
              <button className="rounded-lg border px-6 py-3 font-medium border-slate-700 bg-slate-800 text-white hover:bg-slate-700">
                <Link to="/contact">Contact me</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Information;

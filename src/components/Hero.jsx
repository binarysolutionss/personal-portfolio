import React from "react";
import avatar from "../assets/images/vector images/3d tech icon.png";
import { Link } from "react-router-dom";
import { RiScrollToBottomLine } from "react-icons/ri";

const Hero = () => {
  return (
    <>
      <div className="text-xl relative h-full flex flex-col items-center justify-between p-8 sm:p-10 sm:text-4xl md:p-14 lg:p-10 lg:text-lg xl:text-2xl border-b border-sky-400 border-opacity-25">
        <div className="max-w-full text-center flex flex-col items-center lg:flex-row">
          <img src={avatar} alt='Avatar' className='w-96 sm:w-4/5 md:w-[30rem] lg:w-[22rem] xl:w-[25rem]'></img>
          <div className="flex flex-col justify-center items-center gap-4 sm:gap-8 xl:gap-8">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl text-white">
              Your Next
              <br />
              Great
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gradientPrimary via-gradientSecodndary to-gradientTertiary bg-200 animate-wave-bg">
                {" "}
                Project
              </span>
            </h1>
            <p className="max-w-2xl text-slate-300">
              Hey, I'm Stanley and I build creative, modern, responsive and
              beautiful websites.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8 xl:justify-start">
              <button className="rounded-lg px-6 py-3 font-medium bg-sky-400 text-slate-900 hover:bg-sky-300">
                <Link to="/about">Learn more</Link>
              </button>
              <button className="rounded-lg border px-6 py-3 font-medium border-slate-700 bg-slate-800 text-white hover:bg-slate-700">
                <Link to="/projects">Projects</Link>
              </button>
            </div>
            <RiScrollToBottomLine className="text-slate-300 text-4xl animate-flicker sm:text-6xl lg:text-4xl"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
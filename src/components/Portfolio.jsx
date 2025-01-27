import React, { useState } from "react";
import { ProjectInfo } from "../constants";
import { IoClose } from "react-icons/io5";

const Portfolio = () => {
  
  const [expanded, setExpanded] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const toggleDescription = (projectId) => {
    setExpanded((prevState) => ({
      ...prevState,
      [projectId]: !prevState[projectId],
    }));
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };


  return (
    <>
      <div className="text-xl text-center p-8 flex flex-col gap-4 sm:p-10 sm:text-4xl sm:gap-12 md:p-14 md:text-3xl lg:gap-8 lg:text-lg lg:p-10 xl:text-2xl">
        <h4 className="text-3xl font-bold sm:text-5xl">
          Find some of my projects below
        </h4>
        <p>
          View in
          <span>
            <a
              href="https://github.com/binarysolutionss"
              className="text-sky-400"
            >
              {" "}
              Github profile
            </a>
          </span>
        </p>
        <div className="flex flex-wrap justify-between gap-8">
          {ProjectInfo.map((link) => (
            <div
              key={link.projectId}
              className="w-full text-center p-6 backdrop-blur-2xl bg-sky-400 bg-opacity-5 rounded-3xl flex flex-col gap-4 lg:w-[48%]"
            >
              <h3 className="text-2xl sm:text-4xl">{link.title}</h3>
              <img
                src={link.image}
                alt={link.title}
                className="w-full h-auto rounded-lg cursor-pointer"
                onClick={() => openModal(link.image)}
              />              <p
                className={`text-slate-300 ${expanded[link.projectId] ? "" : "line-clamp-3"}`}
              >
                {link.description}
              </p>
              <button
                className="text-sky-400 hover:text-sky-300"
                onClick={() => toggleDescription(link.projectId)}
              >
                {expanded[link.projectId] ? "Show Less" : "Show More"}
              </button>

              {link.liveLink && (
                <button className="rounded-lg px-6 py-3 font-bold bg-green-400 text-slate-900 hover:bg-green-300 self-center sm:p-6 sm:px-16 lg:p-2 lg:px-8">
                  <a href={link.liveLink}>View Live</a>
                </button>
              )}

              {link.githubRepo && (
                <button className="rounded-lg px-6 py-3 font-bold bg-sky-400 text-slate-900 hover:bg-sky-300 self-center sm:p-6 sm:px-16 lg:p-2 lg:px-8">
                  <a href={link.githubRepo}>Github</a>
                </button>
              )}
              
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
          <div className="relative">
            <img src={selectedImage} alt="Project" className="max-w-full max-h-full" />
            <button
              className="fixed top-4 right-4 text-white text-2xl"
              onClick={closeModal}
            >
              <IoClose className="text-3xl" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Portfolio;

import React from "react";
import { Link } from "react-router-dom";
import ProjectLinks from "./components/ProjectLinks";

const Project = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 relative z-30 bg-base-200" id="project">
      <h1 className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 md:relative  ">
        Project
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 w-full max-w-6xl">
        {ProjectLinks.map((project, index) => (
          <div key={index} className="bg-base-100 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <Link to={project.url} className="block">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-base">{project.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;

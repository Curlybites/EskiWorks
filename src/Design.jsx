import React from "react";
import { Link } from "react-router-dom";
import DesignLinks from "./components/DesignLinks";

const Design = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 relative z-30 bg-base-100" id="design">
      <h1 className="text-3xl md:text-5xl font-bold mb-8 md:absolute md:top-16">
        Design
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-6xl ">
        {DesignLinks.map((design, index) => (
          <Link key={index} to={design.url} className="relative group w-full aspect-w-1 aspect-h-1 ">
            <img
              src={design.image}
              alt={design.title}
              className="w-full h-full object-cover rounded-md"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
              <span className="text-white text-lg">{design.title}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Design;

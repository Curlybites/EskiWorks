import React from "react";
import { SiLaravel } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { SiPhp } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoFigma } from "react-icons/io5";
import { SiAdobexd } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import "./app.css";
export default function Skills() {
  return (
    <div className="md:h-3/4 min-[320px]:h-screen  z-30 w-full relative flex items-center flex-col gap-10 justify-center bg-gradient-to-r border-t-2  bg-base-300 ">
      <div className="overflow-hidden absolute md:top-0  md:h-16 flex items-center bg-base-800 w-full min-[320px]:top-0">
        <div className="flex items-center animate-scroll">
          {Array(10)
            .fill("")
            .map((_, i) => (
              <>
                <span className=" text-2xl mx-4">
                  <FaHtml5 className="text-5xl" />
                </span>
                <span className=" text-2xl mx-4">
                  <SiPhp className="text-5xl" />
                </span>
                <span className=" text-2xl mx-4">
                  <IoLogoJavascript className="text-5xl" />
                </span>
                <span className=" text-2xl mx-4">
                  {" "}
                  <SiLaravel className="text-5xl" />
                </span>
                <span className=" text-2xl mx-4">
                  {" "}
                  <RiTailwindCssFill className="text-5xl" />
                </span>
                <span className=" text-2xl mx-4">
                  {" "}
                  <FaBootstrap className="text-5xl" />
                </span>
                <span className=" text-2xl mx-4">
                  {" "}
                  <FaReact className="text-5xl" />
                </span>
                <span className=" text-2xl mx-4">
                  {" "}
                  <IoLogoFigma className="text-5xl" />
                </span>
                <span className=" text-2xl mx-4">
                  {" "}
                  <SiAdobexd className="text-5xl" />
                </span>
                <span className=" text-2xl mx-4">
                  {" "}
                  <SiAdobephotoshop className="text-5xl" />
                </span>
              </>
            ))}
        </div>
      </div>

      <h1 className="md:text-5xl font-bold min-[320px]:text-lg  min-[320px]:absolute min-[320px]:top-14">
        Skill
      </h1>

      <div className="contents-skill grid md:grid-cols-2 min-[320px]:grid-cols-1  min-[320px]:p-5 ">
        <div className="content flex flex-col items-start gap-3 ">
          <h1 className="md:text-lg font-bold min-[320px]:text-sm ">
            language
          </h1>

          <div className="skills-content grid grid-cols-3 gap-4">
            <div className="language-content px-6 py-3 bg-base-100 flex flex-col gap-2 items-center">
              <FaHtml5 className="md:text-5xl min-[320px]:text-2xl " />
              <h1>Html</h1>
            </div>
            <div className="language-content px-6 py-3 bg-base-100 flex flex-col gap-2 items-center">
              <SiPhp className="md:text-5xl min-[320px]:text-2xl " />
              <h1>Php</h1>
            </div>
            <div className="language-content px-6 py-3 bg-base-100 flex flex-col gap-2 items-center">
              <IoLogoJavascript className="md:text-5xl min-[320px]:text-2xl " />
              <h1>Javascript</h1>
            </div>
          </div>
        </div>

        {/* frameworks */}
        <div className="content flex flex-col gap-3 items-start ">
          <h1 className="text-lg font-bold">Framework</h1>
          <div className="skills-content grid grid-cols-3 gap-4">
            <div className="language-content px-6 py-3 bg-base-100 flex flex-col gap-2 items-center">
              <SiLaravel className="md:text-5xl min-[320px]:text-2xl " />
              <h1>Laravel</h1>
            </div>
            <div className="language-content px-6 py-3 bg-base-100 flex flex-col gap-2 items-center">
              <RiTailwindCssFill className="md:text-5xl min-[320px]:text-2xl " />
              <h1>Tailwind</h1>
            </div>
            <div className="language-content px-6 py-3 bg-base-100 flex flex-col gap-2 items-center">
              <FaBootstrap className="md:text-5xl min-[320px]:text-2xl " />
              <h1>Bootstrap</h1>
            </div>
          </div>
        </div>

        {/* library */}

        <div className="content flex flex-col gap-3  items-start">
          <h1 className="text-lg font-bold mt-2">Library</h1>
          <div className="skills-content grid grid-cols-3 gap-4">
            <div className="language-content px-9 py-3 bg-base-100 flex flex-col gap-2 items-center">
              <FaReact className="md:text-5xl min-[320px]:text-2xl " />
              <h1>React</h1>
            </div>
          </div>
        </div>

        {/* design */}

        <div className="content flex flex-col gap-3 items-start">
          <h1 className="text-lg font-bold mt-2">Design</h1>
          <div className="skills-content grid grid-cols-3 gap-4">
            <div className="language-content px-6 py-3 bg-base-100 flex flex-col gap-2 items-center">
              <IoLogoFigma className="md:text-5xl min-[320px]:text-2xl " />
              <h1>Figma</h1>
            </div>
            <div className="language-content px-6 py-3 bg-base-100 flex flex-col gap-2 items-center">
              <SiAdobexd className="md:text-5xl min-[320px]:text-2xl " />
              <h1 className=" min-[320px]:text-sm">Adobe XD</h1>
            </div>
            <div className="language-content px-6 py-3 bg-base-100 flex flex-col gap-2 items-center">
              <SiAdobephotoshop className="md:text-5xl min-[320px]:text-2xl " />
              <h1>Photoshop</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

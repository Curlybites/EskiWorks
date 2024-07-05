import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Skills from "./Skills";
import Navbar from "./components/Navbar";
import { FaFacebookF } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { TbBrandGmail } from "react-icons/tb";
import { BsInstagram } from "react-icons/bs";
import Footer from "./components/Footer";
import Design from "./Design";
import Nav from "./components/Nav";
import Project from "./Project";
import primaryImage from "./assets/primaryImage.png"; // Import primaryImage

export default function FrontPage() {
  const [theme, setTheme] = useState(() => {
    // Initialize theme from localStorage or default to "nord"
    const storedTheme = localStorage.getItem("theme");
    return storedTheme || "nord";
  });

  // State to force background image reload
  const [bgImageKey, setBgImageKey] = useState(Date.now());

  useEffect(() => {
    // Apply theme to the html element
    const htmlElement = document.querySelector("html");
    htmlElement.setAttribute("data-theme", theme);

    // Update the key to force background image reload on theme change
    setBgImageKey(Date.now());
  }, [theme]);

  return (
    <div className="relative md:h-screen min-[320px]:h-screen/90 " id="home">
      <Navbar />
      {/* Background Image */}
      <div
        className={`bg-cover bg-center saturate-200 bg-no-repeat md:h-screen absolute inset-0 z-20 filter contrast-125 ${
          theme === "dim" ? "grayscale" : ""
        }`}
        style={{
          backgroundImage: `url(${primaryImage}?key=${bgImageKey})`, // Add key to force reload
          backgroundSize: "contain", // Pumili ng 'cover' para sa pangkalahatang pagtutugma
          backgroundPosition: "center", // I-center ang background image
        }}
      ></div>

      <h1
        className="absolute md:bottom-10 md:right-10 lg:text-3xl min-[320px]:right-[20%]  min-[320px]:bottom-[15%]  font-budoni sm:text-lg   "
        id="skill"
      >
        Anthony Esquilona
      </h1>

      <h1 className="absolute inset-0 flex items-center justify-center z-20 text-center sm:right-[35%] md:text-5xl min-[320px]:text-sm  min-[320px]:right-[50%] min-[320px]:h-full  font-bold font-gamaamli">
        Hello world..
      </h1>
      <div className="social-media absolute top-[50%] transform -translate-y-1/2 m-5 z-20">
        <ul className="md:text-3xl flex gap-4  flex-col text-slate-700 min-[320px]:text-lg">
          <li>
            <Link to="https://www.facebook.com/Anthony.esquilona.org">
              <FaFacebookF />
            </Link>
          </li>
          <li>
            <Link to="https://github.com/Curlybites">
              <FiGithub />
            </Link>
          </li>
          <li>
            {/* <a href="">
              <TbBrandGmail />
            </a> */}
            <div
              className="tooltip tooltip-right"
              data-tip="anthony.esquilona09@gmail.com"
            >
              <TbBrandGmail />
            </div>
          </li>
          <li>
            <Link to="https://www.instagram.com/_aecurly/">
              <BsInstagram />
            </Link>
          </li>
        </ul>
      </div>
      {/* Content */}
      <div className="flex items-center justify-center h-full relative z-10 ">
        <div
          className="bg-base-300 rounded-full 
                        min-h-[200px] min-w-[200px] // Fixed height and width
                        sm:h-3/6 sm:w-3/5      // Small screens
                        md:h-4/6 md:w-3/6      // Medium screens
                        lg:h-4/6 lg:w-2/6"
        ></div>
      </div>
      <Skills />
      <Design />
      <Project />
      <Footer />
    </div>
  );
}

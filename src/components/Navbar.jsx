import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { HiCode } from "react-icons/hi";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [theme, setTheme] = useState(() => {
    // Initialize theme from localStorage or default to "nord"
    const storedTheme = localStorage.getItem("theme");
    return storedTheme || "nord";
  });

  const toggleTheme = () => {
    // Toggle between 'nord' and 'dim' themes
    setTheme(theme === "nord" ? "dim" : "nord");
  };

  useEffect(() => {
    // Save theme preference to localStorage
    localStorage.setItem("theme", theme);

    // Apply theme to the html element
    const htmlElement = document.querySelector("html");
    htmlElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <div
      className={`navbar fixed top-0 left-0 bg-base-100 z-50 ${
        showNavbar ? "visible border-b-2 border-base-700 backdrop-blur-2xl" : ""
      } theme-${theme}`}
      style={{
        width: "100%",
        transition: "all 0.3s ease",
      }}
    >
      <div className="flex items-center justify-between w-full px-4 md:px-8">
        {/* Logo and Nav Links */}
        <div className="flex items-center">
          <Link
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            className="btn btn-ghost md:text-3xl font-bold font-gamaamli min-[320px]:text-xl"
          >
            <HiCode />
            Eski Works.
          </Link>

          {/* PC View Menu */}
          <ul className="hidden md:flex gap-5 ml-8">
            <li>
              <Link
                to="skill"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                className="cursor-pointer"
              >
                Skill
              </Link>
            </li>
            <li>
              <Link
                to="design"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                className="cursor-pointer"
              >
                Design
              </Link>
            </li>
            <li>
              <Link
                to="project"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                className="cursor-pointer"
              >
                Project
              </Link>
            </li>
          </ul>
        </div>

        {/* Theme Toggle Button - Desktop */}
        <div className="hidden md:flex items-center ml-auto">
          <label className="flex cursor-pointer gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path
                d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
                stroke={theme === "nord" ? "#000" : "currentColor"}
              />
            </svg>
            <input
              type="checkbox"
              value="toggleTheme"
              className="toggle theme-controller hidden md:block"
              onChange={toggleTheme}
              checked={theme === "dim"}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center">
          <button
            className="btn btn-square btn-ghost md:hidden"
            onClick={toggleMobileMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-6 w-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-16 inset-x-0 bg-base-100 ${
          showMobileMenu ? "block" : "hidden"
        }`}
        style={{
          transition: "all 0.3s ease",
        }}
      >
        <ul className="flex flex-col items-center py-4">
          <li>
            <Link
              to="skill"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              className="cursor-pointer block py-2"
              onClick={toggleMobileMenu}
            >
              Skill
            </Link>
          </li>
          <li>
            <Link
              to="design"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              className="cursor-pointer block py-2"
              onClick={toggleMobileMenu}
            >
              Design
            </Link>
          </li>
          <li>
            <Link
              to="project"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              className="cursor-pointer block py-2"
              onClick={toggleMobileMenu}
            >
              Project
            </Link>
          </li>

          {/* Theme Toggle - Mobile View */}
          <li className="mt-4">
            <label className="flex cursor-pointer gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path
                  d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
                  stroke={theme === "nord" ? "#000" : "currentColor"}
                />
              </svg>
              <input
                type="checkbox"
                value="toggleTheme"
                className="toggle theme-controller"
                onChange={toggleTheme}
                checked={theme === "dim"}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
}

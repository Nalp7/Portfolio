import { useState } from "react";
import logoBlack from "../assets/logo_black.png";
import logoWhite from "../assets/logo_white.png";
import logoVertical from "../assets/logo_vertical.png";
import logoVerticalColor from "../assets/logo_vertical_color.png";
import github_w from "../assets/icons/github-w.svg";
import itchio_w from "../assets/icons/itchio-w.svg";
import linkedin_w from "../assets/icons/linkedin-w.svg";

export function Navbar({ currentPage, setCurrentPage }) {
  const [navItems, setNavItems] = useState([
    { id: 1, name: "Home", path: "#" },
    { id: 2, name: "Projects", path: "#projects" },
    { id: 3, name: "About", path: "#about" },
  ]);
  const [navLinks, setNavLinks] = useState([
    {
      id: 1,
      name: "LinkedIn",
      path: "https://www.linkedin.com/in/justus-grothe/",
      icon: linkedin_w,
    },
    { id: 2, name: "GitHub", path: "https://github.com/Nalp7", icon: github_w },
    {
      id: 3,
      name: "itch.io",
      path: "https://itch.io/profile/palmonapple",
      icon: itchio_w,
    },
  ]);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="bg-dark-gray sticky top-0 drop-shadow-lg">
      <img
        alt="NalpDev"
        src={logoVerticalColor}
        width="60px"
        className="absolute m-2 ml-5 hover:drop-shadow-[0px_0px_15px_rgba(0,146,184,0.2)] hover:scale-100 hover:cursor-default transition-transform duration-1000"
      />
      <div className="flex justify-center items-center space-x-20">
        <div className="space-x-8 inline-flex items-center">
          {navItems.map((item) => (
            <a
              onClick={() => setCurrentPage(item.name)}
              className={classNames(
                item.name === currentPage
                  ? "text-white drop-shadow-[0px_0px_15px_rgba(0,146,184,0.9)]"
                  : "text-normal-cyan hover:text-normal-cyan",
                "ml-2 mr-2 p-6 rounded-md hover:drop-shadow-[0px_0px_15px_rgba(0,146,184,0.9)] hover:scale-105 transition-transform duration-150"
              )}
              href={item.path}
            >
              {item.name}
            </a>
          ))}
          <div className="border-l border-white h-12 mx-4" />
          {navLinks.map((link) => (
            <a
              className="ml-2 mr- p-6 hover:drop-shadow-[0px_0px_15px_rgba(0,146,184,0.9)] hover:scale-105 transition-transform duration-150"
              href={link.path}
              target="_blank"
            >
              <img src={link.icon} alt={link.name} title={link.name} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

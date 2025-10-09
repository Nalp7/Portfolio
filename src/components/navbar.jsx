import { useState } from "react";
import logoBlack from "../assets/logo_black.png";
import logoWhite from "../assets/logo_white.png";
import logoVertical from "../assets/logo_vertical.png";
import logoVerticalColor from "../assets/logo_vertical_color.png";
import logoVerticalYellow from "../assets/logo-vertical-yellow.png";
import github_w from "../assets/icons/github-w.svg";
import itchio_w from "../assets/icons/itchio-w.svg";
import linkedin_w from "../assets/icons/linkedin-w.svg";

export function Navbar({ currentPage, setCurrentPage }) {
  const navItems = [
    { id: 1, name: "Projects", path: "#projects" },
    { id: 2, name: "About", path: "#about" },
    { id: 3, name: "AI", path: "#chat" },
    { id: 4, name: "Contact", path: "#contact" },
  ];

  return (
    <div className="bg-dark-gray sticky top-[-1px] drop-shadow-lg z-20">
      <div className="space-x-8 grid grid-cols-5 md:grid-cols-3 items-center w-full">
        <a
          href="#"
          className="justify-self-start hover:scale-105 md:hover:scale-110 transition-all duration-150"
        >
          <h1 className="ml-3 md:my-1.5 md:mx-4 text-2xl md:text-3xl leading-7 text-light-purple font-mono font-extrabold">
            Jus <br />
            tus
          </h1>
        </a>
        <div className="flex justify-center m-0 col-span-3 items-center md:col-span-1">
          {navItems.map((item) => (
            <a
              key={item.id}
              className="text-light-blue hover:text-light-purple hover:scale-105 md:hover:scale-110 transition-transform duration-150 mx-1 px-2 md:mx-2 md:py-[0.3rem] md:px-5 rounded-md"
              href={item.path}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

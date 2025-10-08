import { useState, useEffect, useRef } from "react";
import { ProjectContainer } from "./projectContainer";
import godot_w from "../assets/icons/godot-w.png";
import code_w from "../assets/icons/code-w.png";
import os_w from "../assets/icons/os-w.png";
import DASHYGON1 from "../assets/DASHYGON/DASHYGON-1.png";
import DASHYGON2 from "../assets/DASHYGON/DASHYGON-2.png";
import DASHYGON3 from "../assets/DASHYGON/DASHYGON-3.png";

export function ProjectContent() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "DASHYGON",
      link: "https://palmonapple.itch.io/dashygon",
      icons: [
        { id: 0, name: "Godot", text: "Game engine: Godot", icon: godot_w },
        {
          id: 1,
          name: "GDScript",
          text: "Programming language: GDScript",
          icon: code_w,
        },
        {
          id: 2,
          name: "Operating System",
          text: "Available for browser on my itch.io page or Windows(Browser version is laggy. Download recommended)",
          icon: os_w,
        },
      ],
      content: {
        description: (
          <>
            <span>A two-dimensional roguelite game</span>
            <br className="hidden md:block" />
            <br />
            <span>
              Check out &#32;
              <a
                href="https://www.youtube.com/watch?v=IhhNnwX03Rc"
                target="_blank"
                className="underline hover:text-white"
              >
                this video
              </a>
            </span>
            <br />
            <span className="font-light italic text-xs">
              video is not made by me
            </span>
          </>
        ),
      },
      images: [
        {
          image: DASHYGON1,
          alt: "DASHYGON Main Menu",
        },
        {
          image: DASHYGON2,
          alt: "DASHYGON Gameplay",
        },
        {
          image: DASHYGON3,
          alt: "DASHYGON Death Screen",
        },
      ],
    },
  ]);
  return (
    <>
      {projects.map((project) => (
        <ProjectContainer
          key={project.id}
          id={project.id}
          name={project.name}
          link={project.link}
          icons={project.icons}
          content={project.content}
          images={project.images}
        />
      ))}
    </>
  );
}

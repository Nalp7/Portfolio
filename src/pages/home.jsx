import { useState } from "react";
import { Navbar } from "../components/navbar";
import { HomeContent } from "../components/homeContent";
import { ProjectContent } from "../components/projectContent";
import godot_w from "../assets/icons/godot-w.png";
import code_w from "../assets/icons/code-w.png";
import os_w from "../assets/icons/os-w.png";
import DASHYGON1 from "../assets/DASHYGON/DASHYGON-1.png";

export function Home() {
  const [currentPage, setCurrentPage] = useState("Home");

  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "DASHYGON",
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
          text: "Available for browser on my itch.io Page or Windows(Browser version is laggy. Download recommended)",
          icon: os_w,
        },
      ],
      content: {
        description: "A 2-dimensional shooter-roguelite game.",
        image: DASHYGON1,
      },
    },
  ]);

  return (
    <>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {currentPage === "Home" && <HomeContent />}
      {currentPage === "Projects" &&
        projects.map((project) => (
          <ProjectContent
            name={project.name}
            icons={project.icons}
            content={project.content}
          />
        ))}
    </>
  );
}

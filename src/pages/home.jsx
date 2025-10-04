import { useState } from "react";
import { animate, delay, motion, stagger } from "framer-motion";
import { Navbar } from "../components/navbar";
import { HomeContent } from "../components/homeContent";
import { ProjectContent } from "../components/projectContent";
import { Footer } from "../components/footer";
import godot_w from "../assets/icons/godot-w.png";
import code_w from "../assets/icons/code-w.png";
import os_w from "../assets/icons/os-w.png";
import DASHYGON1 from "../assets/DASHYGON/DASHYGON-1.png";
import DASHYGON2 from "../assets/DASHYGON/DASHYGON-2.png";
import DASHYGON3 from "../assets/DASHYGON/DASHYGON-3.png";

const container = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const slideInLeft = {
  // Startzustand (Initial State)
  initial: {
    x: -2000, // Starte 100px links außerhalb des Bildschirms
    opacity: 0,
  },
  // Endzustand (Animate State - wird beim Mounten erreicht)
  animate: {
    x: 0,
    opacity: 1,
  },
};

const slideInLeftTransition = {
  default: {
    type: "tween",
    duration: 0.4,
    ease: "circOut",
  },
  opacity: { type: "tween", duration: 0.2, ease: "easeOut " },
};

export function Home() {
  const [currentPage, setCurrentPage] = useState("Home");

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
          text: "Available for browser on my itch.io Page or Windows(Browser version is laggy. Download recommended)",
          icon: os_w,
        },
      ],
      content: {
        description: (
          <>
            A two-dimensional roguelite game
            <br className="hidden md:block" />
            <br />
            <p className="text-sm">
              Check out this video: <br />
              <a
                href="https://www.youtube.com/watch?v=IhhNnwX03Rc&t=109s"
                target="_blank"
                className="underline hover:text-white"
              >
                https://www.youtube.com/watch?v=IhhNnwX03Rc&t=109s
              </a>
            </p>
            <p className="font-light italic text-xs">video is not made by me</p>
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
    {
      id: 2,
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
          text: "Available for browser on my itch.io Page or Windows(Browser version is laggy. Download recommended)",
          icon: os_w,
        },
      ],
      content: {
        description: (
          <>
            A two-dimensional roguelite game
            <br className="hidden md:block" />
            <br />
            <p className="text-sm">
              Check out this video: <br />
              <a
                href="https://www.youtube.com/watch?v=IhhNnwX03Rc&t=109s"
                target="_blank"
                className="underline hover:text-white"
              >
                https://www.youtube.com/watch?v=IhhNnwX03Rc&t=109s
              </a>
            </p>
            <p className="font-light italic text-xs">video is not made by me</p>
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
    <div className="flex flex-col min-h-screen">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-grow">
        {currentPage === "Home" && <HomeContent />}
        {currentPage === "Projects" && (
          <motion.div variants={container} initial="initial" animate="animate">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={slideInLeft}
                transition={slideInLeftTransition}
              >
                <ProjectContent
                  name={project.name}
                  link={project.link}
                  icons={project.icons}
                  content={project.content}
                  images={project.images}
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </main>
      <Footer />
    </div>
  );
}

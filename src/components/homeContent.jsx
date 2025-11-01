import { useState, useEffect, useRef } from "react";
import { ProjectContent } from "./projectContent";
import { Title } from "./title";
import { ArrowDown } from "./arrowDown";
import { About } from "./about";
import { Motivation } from "./motivation";
import { Contact } from "./contact";
import { Chat } from "./chat";
import { Popup } from "./popup";
import chat_p from "../assets/icons/chat-p.png";
import github_w from "../assets/icons/github-w.svg";
import itchio_w from "../assets/icons/itchio-w.svg";
import linkedin_w from "../assets/icons/linkedin-w.svg";
import html from "../assets/icons/html.png";
import css from "../assets/icons/css.png";
import tailwind from "../assets/icons/tailwind.png";
import react from "../assets/icons/react.png";
import vite from "../assets/icons/vite.png";
import godot from "../assets/icons/godot.png";
import csharp from "../assets/icons/csharp.png";
import { p } from "framer-motion/client";
import { time } from "framer-motion";

export function HomeContent() {
  const conLinks = [
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
  ];
  const skills = [
    {
      id: 1,
      name: "HTML",
      icon: html,
    },
    {
      id: 2,
      name: "CSS",
      icon: css,
    },
    {
      id: 3,
      name: "Tailwind",
      icon: tailwind,
    },
    {
      id: 4,
      name: "React",
      icon: react,
    },
    {
      id: 5,
      name: "Vite",
      icon: vite,
    },
    {
      id: 6,
      name: "Godot",
      icon: godot,
    },
    {
      id: 7,
      name: "C#",
      icon: csharp,
    },
  ];

  const elementsToObserve = useRef([]);

  const [popupContent, setPopupContent] = useState();

  function addToRefs(element) {
    if (element && !elementsToObserve.current.includes(element)) {
      elementsToObserve.current.push(element);
    }
  }

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    elementsToObserve.current.forEach((element) => {
      observer.observe(element);
    });

    function handleIntersect(entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove(
            "opacity-0",
            "translate-y-16",
            "translate-x-16"
          );
          entry.target.classList.add(
            "opacity-100",
            "translate-y-0",
            "translate-x-0"
          );

          observer.unobserve(entry.target);
        }
      });
    }
  }, []);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "auto";
    }
  }, []);

  function toggleChat() {
    var chatIcon = document.querySelector("#chatIcon");
    chatIcon.classList.toggle("opacity-100");
    chatIcon.classList.toggle("opacity-0");
    var chat = document.querySelector("#chatContainer");
    chat.classList.toggle("scale-0");
    chat.classList.toggle("opacity-0");
  }

  function togglePopup(content) {
    content != null ? setPopupContent(content) : null;
    var popup = document.querySelector("#popup");
    var popupContainer = document.querySelector("#popupContainer");
    popupContainer.classList.toggle("opacity-0");
    popupContainer.classList.toggle("opacity-100");
  }

  return (
    <>
      <div
        id="popupContainer"
        className="fixed top-1/2 left-1/2 -translate-1/2 z-100 w-[calc(100vw-50px)] sm:w-[calc(100vw-150px)] md:w-[calc(100vw-200px)] opacity-0 transition-opacity duration-400 ease-in-out"
      >
        <Popup togglePopup={togglePopup} content={popupContent} />
      </div>
      <div className="flex flex-col items-center justify-around">
        <div
          ref={addToRefs}
          className="opacity-0 -translate-y-16 duration-1000 ease-out transition-all"
        >
          <Title />
        </div>
        <div
          ref={addToRefs}
          className="mt-[25vh] opacity-0 translate-y-16 duration-1000 ease-out animate-pulse hover:animate-none transition-all"
        >
          <ArrowDown href="#about" />
        </div>
        <div className="flex flex-col mb-[10vh] md:max-w-[90vw] mx-5 md:mx-0">
          <div
            ref={addToRefs}
            className="opacity-0 translate-y-16 duration-1000 ease-out transition-all"
          >
            <About />
          </div>
          <div
            ref={addToRefs}
            className="opacity-0 translate-y-16 duration-1000 ease-out transition-all"
          >
            <Motivation />
          </div>
          <div
            ref={addToRefs}
            className="opacity-0 translate-y-16 transition-all duration-1000 ease-out"
          >
            <ArrowDown href="#projects" />
          </div>
          <div
            ref={addToRefs}
            className="opacity-0 translate-y-16 transition-all duration-1000 ease-out"
          >
            <ProjectContent togglePopup={togglePopup} />
          </div>
          <div
            ref={addToRefs}
            className="opacity-0 translate-y-16 transition-all duration-1000 ease-out"
          >
            <ArrowDown href="#contact" />
          </div>
          <div
            ref={addToRefs}
            className="opacity-0 translate-y-16 transition-all duration-1000 ease-out"
          >
            <Contact conLinks={conLinks} />
          </div>
        </div>
      </div>
      <img
        id="chatIcon"
        src={chat_p}
        onClick={toggleChat}
        className="scale-x-[-1] fixed opacity-100 bottom-5 right-5 w-16 p-2 rounded-2xl hover:cursor-pointer hover:scale-x-[-1.1] hover:scale-110 transition-all duration-400"
      />
      <div
        id="chatContainer"
        className="fixed h-fit bottom-5 right-5 scale-0 opacity-0 duration-400 ease-out transition-all origin-bottom-right"
      >
        <Chat toggleChat={toggleChat} />
      </div>
    </>
  );
}

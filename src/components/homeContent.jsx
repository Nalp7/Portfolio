import { useState, useEffect, useRef } from "react";
import { ProjectContent } from "./projectContent";
import down_w from "../assets/icons/down-w.png";
import github_w from "../assets/icons/github-w.svg";
import itchio_w from "../assets/icons/itchio-w.svg";
import linkedin_w from "../assets/icons/linkedin-w.svg";
import mail_w from "../assets/icons/mail-w.png";

export function HomeContent() {
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

  const elementsToObserve = useRef([]);

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

  return (
    <div className="flex flex-col items-center justify-around">
      <div className="flex flex-col">
        <h1
          ref={addToRefs}
          className="text-center md:text-left text-7xl md:text-9xl font-extrabold text-light-purple mt-10 opacity-0 -translate-y-16 transition-all duration-1000 ease-out"
        >
          Hey,
          <br />
          I'm Justus
          <p className="text-3xl md:text-4xl font-thin text-light-blue">
            a Developer driven by <span className="font-mono">impactful</span>{" "}
            creations.
          </p>
        </h1>
      </div>
      <div
        ref={addToRefs}
        className="my-[30vh] opacity-0 translate-y-16 transition-all duration-1000 ease-out"
      >
        <a href="#about">
          <img
            src={down_w}
            alt="down"
            className="m-auto hover:translate-y-2 transition-all duration-300"
          />
        </a>
      </div>

      <div className="flex flex-col mb-[10vh] md:max-w-[90vw] lg:max-w-[90vw] mx-5 md:mx-0">
        <div
          id="about"
          ref={addToRefs}
          className="flex flex-col w-full justify-between md:flex-row text-light-blue text-xl font-light mt-[10vh] mb-[5vh] md:mb-[10vh] md:mt-[25vh] scroll-m-45 opacity-0 translate-y-16 transition-all duration-1000 ease-out"
        >
          <h2 className="md:mr-10 text-4xl md:text-5xl md:text-end mb-5 font-bold font-mono text-light-purple">
            about <br />
            me
          </h2>
          <p className="">
            Hey! I am{" "}
            <span className="font-mono font-semibold">Justus Grothe</span> from{" "}
            <span className="font-mono font-semibold">Germany</span>.
            <br />
            Currently, I am an apprentice in{" "}
            <span className="font-mono font-semibold">
              Software Engineering{" "}
            </span>
            at{" "}
            <span className="font-mono font-semibold">Nordwest Handel AG</span>.
            <br />
            <br />
            My journey began with video games, sparking a{" "}
            <span className="font-mono font-semibold">passion</span> that now
            drives me to create{" "}
            <span className="font-mono font-semibold">practical</span>{" "}
            applications across both{" "}
            <span className="font-mono font-semibold">front-end</span> and{" "}
            <span className="font-mono font-semibold">back-end</span>{" "}
            development in various fields.
          </p>
        </div>
        <div
          id="motivation"
          ref={addToRefs}
          className="flex w-full justify-end mb-[5vh] md:mb-[10vh] scroll-m-45 opacity-0 translate-y-16 transition-all duration-1000 ease-out"
        >
          <div className="flex flex-col md:flex-row text-end text-xl font-light text-light-blue">
            <h2 className="block md:hidden md:ml-10 text-4xl md:text-5xl md:text-end mb-5 font-bold font-mono text-light-purple">
              motiv <br />
              ation
            </h2>
            <p className="">
              The simple idea of making genuinely{" "}
              <span className="font-mono font-semibold">good & useful</span>{" "}
              things. <br />
              Projects that don't just look compelling, but also provide{" "}
              <span className="font-mono font-semibold">real value</span>.
            </p>
            <h2 className="hidden md:block md:ml-10 text-4xl md:text-5xl md:text-end mb-5 font-bold font-mono text-light-purple">
              motiv <br />
              ation
            </h2>
          </div>
        </div>
        <div
          ref={addToRefs}
          className="mb-[15vh] opacity-0 translate-y-16 transition-all duration-1000 ease-out"
        >
          <a href="#projects">
            <img
              src={down_w}
              alt="down"
              className="m-auto hover:translate-y-2 transition-all duration-300"
            />
          </a>
        </div>
        <div
          id="projects"
          ref={addToRefs}
          className="mb-[5vh] md:mb-[10vh] mt-[10vh] md:mt-[25vh] scroll-m-36 opacity-0 translate-y-16 transition-all duration-1000 ease-out"
        >
          <div>
            <h2 className="text-4xl md:text-5xl text-center mb-5 font-bold font-mono text-light-purple">
              projects
            </h2>
          </div>
          <div className="flex flex-wrap justify-center w-full">
            <ProjectContent className="flex flex-wrap justify-center" />
          </div>
        </div>
        <div
          ref={addToRefs}
          className="mb-[15vh] opacity-0 translate-y-16 transition-all duration-1000 ease-out"
        >
          <a href="#contact">
            <img
              src={down_w}
              alt="down"
              className="m-auto hover:translate-y-2 transition-all duration-300"
            />
          </a>
        </div>
        <div
          id="contact"
          ref={addToRefs}
          className="flex flex-col md:flex-row items-center justify-center mb-[5vh] md:mb-[10vh] mt-[10vh] md:mt-[20vh] scroll-m-36 opacity-0 translate-y-16 transition-all duration-1000 ease-out"
        >
          <div>
            <h2 className="text-4xl md:text-5xl md:text-end mb-5 md:mb-0 md:mr-10 font-bold font-mono text-light-purple">
              contact <br className="hidden md:block" />
              me
            </h2>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex flex-row flex-nowrap justify-center md:justif-end">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  className="p-1 hover:cursor-pointer hover:scale-110 items-center transition-transform duration-150 will-change-transform"
                  href={link.path}
                  target="_blank"
                >
                  <div className="inline-flex">
                    <p className="font-mono font-semibold md:text-xl text-wrap text-end text-light-blue size-10 md:size-15 break-words">
                      {link.name}
                    </p>
                    <img
                      className="size-12 md:size-15"
                      src={link.icon}
                      alt={link.name}
                      title={link.name}
                    />
                  </div>
                </a>
              ))}
            </div>
            <a
              className="p-1 hover:cursor-pointer hover:scale-110 items-center transition-transform duration-150 will-change-transform"
              href="mailto:justg2007@gmail.com"
              target="_blank"
            >
              <div className="flex justify-center items-center">
                <img
                  src={mail_w}
                  alt="mail"
                  className="w-7 mr-1 translate-y-0.25"
                />
                <p className="font-mono font-semibold md:text-xl text-wrap text-end text-light-blue break-words">
                  justg2007@gmail.com
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

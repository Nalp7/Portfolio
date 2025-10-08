import { useState, useEffect, useRef } from "react";
import down_w from "../assets/icons/down-w.png";
import react_w from "../assets/icons/godot-w.png";
import tailwind_w from "../assets/icons/godot-w.png";
import node_w from "../assets/icons/godot-w.png";
import git_w from "../assets/icons/godot-w.png";
import godot_w from "../assets/icons/godot-w.png";

export function HomeContent() {
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
        <a href="#down">
          <img
            src={down_w}
            alt="down"
            className="m-auto hover:translate-y-2 transition-all duration-300"
          />
        </a>
      </div>
      <div
        id="down"
        className="flex flex-col mb-[30vh] md:max-w-[80vw] mx-5 md:mx-0"
      >
        <div
          id="about"
          ref={addToRefs}
          className="flex flex-col w-full justify-between md:flex-row text-light-blue text-xl font-light my-[10vh] md:my-[25vh] opacity-0 translate-y-16 transition-all duration-1000 ease-out scroll-mt-25"
        >
          <h2 className="md:mr-10 text-4xl md:text-5xl md:text-end mb-5 font-bold font-mono text-light-purple">
            about me
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
          ref={addToRefs}
          className="flex w-full justify-between my-[10vh] md:my-[25vh] opacity-0 translate-y-16 transition-all duration-1000 ease-out"
        >
          <div className="flex flex-col md:flex-row text-xl font-light text-light-blue">
            <h2 className="md:mr-10 text-4xl md:text-5xl md:text-end mb-5 font-bold font-mono text-light-purple">
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
          </div>
        </div>
      </div>
    </div>
  );
}

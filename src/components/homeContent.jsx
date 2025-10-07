import { useState, useEffect, useRef } from "react";
import down_w from "../assets/icons/down-w.png"
import temp from "../assets/logo_vertical_color.png"

export function HomeContent() {

  const elementsToObserve = useRef([]);

  function addToRefs(element) {
    if (element && !elementsToObserve.current.includes(element)) {
      elementsToObserve.current.push(element);
    }
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.7,
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    elementsToObserve.current.forEach((element) => {
      observer.observe(element);
    });

    function handleIntersect(entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-16');
          entry.target.classList.add('opacity-100', 'translate-y-0');

          observer.unobserve(entry.target);
        }
      });
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-around">
      <div className="flex flex-col">
        <h1 className="text-center md:text-left text-7xl md:text-9xl font-extrabold text-light-purple mt-10">
          Hey,<br />I am Justus
          <p className="text-3xl md:text-4xl font-thin text-light-blue">a Developer driven by <span className="font-mono">impactful</span> creations.</p>
        </h1>

      </div>
      <div id="down" ref={addToRefs} className="my-[30vh] opacity-0 translate-y-16 transition-all duration-1000 ease-out">
        <a href="#down">
          <img src={down_w} alt="down" className="m-auto hover:translate-y-2 transition-all duration-300" />
        </a>
      </div>
      <div className="flex flex-col mb-[30vh] mx-0">
        <div ref={addToRefs} id="firstElement" className="flex flex-row opacity-0 translate-y-16 transition-all duration-1000 ease-out">
          <div className="flex flex-col text-center text-xl font-light text-light-blue">
            <h2 className="text-4xl md:text-5xl font-bold text-light-purple">Motivation</h2> <br />
            <p>The simple idea of making genuinely <span className="font-mono">good & useful</span> things. <br />
              Projects that don't just look compelling, but also provide <span className="font-mono">real value</span>.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

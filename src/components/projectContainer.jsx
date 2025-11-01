import { useState, useEffect, useRef } from "react";
import link_w from "../assets/icons/link-w.svg";
import { twMerge } from "tailwind-merge";
import dot_w from "../assets/icons/dot-w.png";
import { html } from "framer-motion/client";

export function ProjectContainer({
  id,
  name,
  link,
  icons,
  content,
  images,
  togglePopup,
}) {
  const popupcontent = (
    <div className="flex flex-col">
      {icons.map((icon) => (
        <div className="inline-flex">
          <img
            key={icon.id}
            src={icon.icon}
            alt={icon.name}
            title={icon.name}
            className="m-2 size-8"
          />
          <span className="font-light text-sm text-light-blue self-center">
            {icon.text}
          </span>
        </div>
      ))}
    </div>
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const elementsToObserve = useRef([]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  function addToRefs(element) {
    if (element && !elementsToObserve.current.includes(element)) {
      elementsToObserve.current.push(element);
    }
  }

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    elementsToObserve.current.forEach((element) => {
      observer.observe(element);
    });

    function handleIntersect(entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-0", "translate-x-24");
          entry.target.classList.add("opacity-100", "translate-x-0");

          observer.unobserve(entry.target);
        }
      });
    }
  }, []);

  return (
    <div
      ref={addToRefs}
      className="flex flex-row items-center bg-dark-gray m-4 rounded-2xl shadow-sm shadow-light-purple z-10 -translate-x-24 opacity-0 transition-all duration-1000 ease-out"
    >
      <div className="flex flex-col justify-center text-center p-2 w-full">
        <div className="text-center">
          <h1 className="font-extrabold text-3xl md:text-4xl text-light-purple">
            <span className="inline-flex">
              {name}
              <a href={link} target="_blank" className="pl-2">
                <img
                  src={link_w}
                  alt="Link"
                  title="Project link"
                  className="min-w-6 w-6 hover:scale-110 transition-transform duration-150 will-change-transform"
                />
              </a>
            </span>
          </h1>
          <br className="hidden md:block" />
          <span className="text-light-blue font-light">
            {content.description}
          </span>
        </div>
        <div className="flex flex-col">
          <div className="mt-4">
            <div className="m-auto relative h-fit aspect-video max-w-[405px]">
              <div className="relative h-full overflow-hidden rounded-lg">
                {/* Carousel Body */}
                <div className="h-full">
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className={twMerge(
                        "absolute inset-0 transition-opacity duration-700 ease-in-out",
                        index === activeIndex ? "opacity-100" : "opacity-0"
                      )}
                    >
                      <img
                        src={image.image}
                        className="block w-auto h-auto object-cover rounded-2xl"
                        alt={image.alt}
                      />
                    </div>
                  ))}
                </div>

                {/* Carousel Pagination */}
                <div className="absolute bottom-2 left-0 right-0 z-10 flex items-center justify-center gap-2">
                  {images.map((image, index) => (
                    <img
                      key={index}
                      src={dot_w}
                      onClick={() => setActiveIndex(index)}
                      className={twMerge(
                        "w-3 h-3 cursor-pointer transition-opacity",
                        index === activeIndex
                          ? "opacity-100"
                          : "opacity-30 hover:opacity-75"
                      )}
                      alt={image.alt}
                    />
                  ))}
                </div>

                {/* Carousel Controls */}
                <button
                  type="button"
                  className="absolute top-1/2 left-0 z-20 -translate-y-1/2 ml-2 p-2 bg-black/30 hover:bg-black/50 rounded-full hover:cursor-pointer hover:scale-110 transition-transform duration-150 will-change-transform"
                  onClick={handlePrev}
                >
                  <svg
                    className="w-4 h-4 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 1 1 5l4 4"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  className="absolute top-1/2 right-0 z-20 -translate-y-1/2 mr-2 p-2 bg-black/30 hover:bg-black/50 rounded-full hover:cursor-pointer hover:scale-110 transition-transform duration-150 will-change-transform"
                  onClick={handleNext}
                >
                  <svg
                    className="w-4 h-4 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <button
            onClick={() => togglePopup(popupcontent)}
            className="flex justify-self-center mx-auto w-fit my-4 bg-light-blue rounded-lg px-2 py-1 cursor-pointer hover:bg-light-purple"
          >
            tech stack
          </button>
        </div>
      </div>
    </div>
  );
}

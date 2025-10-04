import { useState, useEffect } from "react";
import link_w from "../assets/icons/link-w.svg";
import { twMerge } from "tailwind-merge";
import dot_w from "../assets/icons/dot-w.png";

export function ProjectContent({ name, link, icons, content, images }) {
  const [hovered, setHovered] = useState({ bool: false, index: -1 });
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="flex flex-col items-center bg-dark-gray m-4 md:m-10 rounded-2xl drop-shadow-lg z-10">
      <div className="flex flex-col lg:flex-row p-5 w-full ">
        <div className="md:basis-6/15">
          <h1 className="font-extrabold text-4xl md:text-5xl text-normal-cyan">
            <span className="inline-flex">
              {name}
              <a href={link} target="_blank" className="pl-3">
                <img
                  src={link_w}
                  alt="Link"
                  title="itch.io link"
                  className="w-10 hover:drop-shadow-[0px_0px_15px_rgba(0,146,184,0.9)] hover:scale-105 transition-transform duration-150 will-change-transform"
                />
              </a>
            </span>
          </h1>

          <br className="hidden md:block" />
          <p className="md:text-xl text-normal-cyan">{content.description}</p>
        </div>
        <div className="mt-6 lg:mt-0 w-full lg:basis-8/15">
          <div className="relative h-fit aspect-video">
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
                      className="block w-fit h-fit object-cover rounded-2xl"
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
        <div className="flex lg:basis-2/15 justify-center p-2 mt-6 lg:mt-0">
          {hovered.bool === true && (
            <div className="text-normal-cyan text-sm lg:text-base absolute right-1 bottom-20 lg:bottom-auto lg:-top-5 p-1 bg-normal-gray rounded-md drop-shadow-lg">
              {icons[hovered.index].text}
            </div>
          )}
          <ul className="flex flex-row lg:flex-col">
            {icons.map((icon) => (
              <>
                <li>
                  <img
                    onMouseEnter={() =>
                      setHovered({ bool: true, index: icon.id })
                    }
                    onMouseLeave={() => setHovered({ bool: false, index: -1 })}
                    className="mx-10 lg:mx-0 w-10 drop-shadow-sm hover:drop-shadow-[0px_0px_15px_rgba(0,146,184,0.9)] hover:scale-105 transition-transform duration-150 will-change-transform"
                    src={icon.icon}
                    alt={icon.name}
                    title={icon.name}
                  />
                </li>
                <li className="border-r-1 lg:my-8 lg:border-b-1 border-white last-of-type:border-0" />
              </>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

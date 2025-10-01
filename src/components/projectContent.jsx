import { useState } from "react";

export function ProjectContent({ name, icons, content }) {
  const [hovered, setHovered] = useState({ bool: false, index: -1 });

  return (
    <div className="flex flex-col items-center bg-dark-gray m-10 rounded-2xl drop-shadow-lg">
      <div className="flex flex-row p-5 w-full justify-between">
        <div className="basis-6/12">
          <h1 className="font-extrabold text-5xl text-normal-cyan flex-1">
            {name}
          </h1>{" "}
          <br />
          <p className="text-xl text-normal-cyan">{content.description}</p>
        </div>
        <img
          className="basis-5/12 w-2/5"
          src={content.image}
          alt="DASHYGON Main Menu"
        />
        <div className="flex basis-1/12 justify-center p-2">
          {hovered.bool === true && (
            <div className="text-normal-cyan absolute right-1 -top-5 p-1 bg-normal-gray rounded-md drop-shadow-lg">
              {icons[hovered.index].text}
            </div>
          )}
          <ul>
            {icons.map((icon) => (
              <>
                <li>
                  <img
                    onMouseEnter={() =>
                      setHovered({ bool: true, index: icon.id })
                    }
                    onMouseLeave={() => setHovered({ bool: false, index: -1 })}
                    className="w-10 drop-shadow-sm hover:drop-shadow-[0px_0px_15px_rgba(0,146,184,0.9)] hover:scale-105 transition-transform duration-150 will-change-transform"
                    src={icon.icon}
                    alt={icon.name}
                    title={icon.name}
                  />
                </li>
                <li className="mt-8 mb-8 border-b-1 border-white last-of-type:border-0" />
              </>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import DASHYGON1 from "../assets/DASHYGON/DASHYGON-1.png";
import Github_w from "../assets/icons/github-w.svg";
import godot_w from "../assets/icons/godot-w.png";

export function ProjectContent() {
  const [propertyDASHYGON, setPropertyDASHYGON] = useState([
    { id: 1, name: "Godot", icon: godot_w },
  ]);

  return (
    <div className="flex flex-col items-center bg-dark-gray m-10 rounded-2xl drop-shadow-lg">
      <div className="flex flex-row p-5 w-full justify-between">
        <div className="basis-7/12">
          <h1 className="font-extrabold text-5xl text-normal-cyan flex-1">
            DASHYGON
          </h1>
          <p className="text-xl text-dark-cyan">
            Built with the Godot Game Engine in GDScript
          </p>
        </div>
        <img
          className="basis-4/12 w-2/5"
          src={DASHYGON1}
          alt="DASHYGON Main Menu"
        />
        <div className="flex basis-1/12 justify-center p-2">
          <ul>
            {propertyDASHYGON.map((prop) => (
              <>
                <li>
                  <img
                    className="w-10 hover:drop-shadow-[0px_0px_15px_rgba(0,146,184,0.9)] hover:scale-105 transition-transform duration-150"
                    src={prop.icon}
                    alt={prop.name}
                  />
                </li>
                <li className="mt-4 mb-4 border-b-1 border-white" />
              </>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

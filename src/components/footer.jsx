import { useState } from "react";
import github_w from "../assets/icons/github-w.svg";
import itchio_w from "../assets/icons/itchio-w.svg";
import linkedin_w from "../assets/icons/linkedin-w.svg";
import { Underline } from "lucide-react";

export function Footer() {
  const [content1, setContent1] = useState({
    icons: [
      {
        icon: linkedin_w,
        text: "LinkedIn",
        href: "https://www.linkedin.com/in/justus-grothe/",
      },
      { icon: github_w, text: "GitHub", href: "https://github.com/Nalp7" },
      {
        icon: itchio_w,
        text: "itch.io",
        href: "https://itch.io/profile/palmonapple",
      },
    ],
  });

  return (
    <div className="flex justify-center m-0 bg-dark-gray p-5">
      <div className="text-dark-cyan justify-center text-center w-[175%]">
        <div className="text-center border-b-1 border-dark-cyan pb-3 w-[50%] justify-self-center">
          <h1 className="font-extrabold">NalpDev</h1>
        </div>
        <div className="flex flex-row justify-center justify-self-center mt-3 w-[50%] pb-3">
          <div className="flex flex-col text-center items-center mx-5">
            <h2 className="font-bold">Links</h2>
            <div className="flex flex-row mt-2 items-center">
              {content1.icons.map((element) => (
                <>
                  <span>
                    <a href={element.href} target="_blank">
                      <img
                        src={element.icon}
                        alt={element.text}
                        title={element.text}
                        className="px-1 min-w-[30px] lg:px-3 hover:drop-shadow-[0px_0px_15px_rgba(0,146,184,0.9)] hover:scale-105 transition-transform duration-150"
                      />
                    </a>
                  </span>
                  <span className="hidden lg:block last:hidden">•</span>
                </>
              ))}
            </div>
          </div>
          <div className="text-center items-center mx-5">
            <h2 className="font-bold">Contact</h2>
            <div className="mt-2 items-center">
              <span>justg2007@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center">
          <span className="text-sm">
            Icons by{" "}
            <a href="https://icons8.com" target="_blank" className="underline">
              Icons8
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

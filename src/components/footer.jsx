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
    <div className="flex justify-center m-0 bg-dark-gray shadow-[0_-8px_16px_rgba(0,0,0,0.05)] p-5 top-shadow-2xl">
      <div className="flex flex-col items-center text-darker-blue text-center">
        <div className="flex flex-col md:flex-row justify-center pb-3">
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
                        className="px-1 min-w-[30px] lg:px-3 hover:scale-110 transition-transform duration-150"
                      />
                    </a>
                  </span>
                  <span className="hidden lg:block last:hidden">•</span>
                </>
              ))}
            </div>
          </div>
          <div className="text-center items-center mx-5 mt-2">
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

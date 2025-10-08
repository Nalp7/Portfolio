import { useState } from "react";
import github_w from "../assets/icons/github-w.svg";
import itchio_w from "../assets/icons/itchio-w.svg";
import linkedin_w from "../assets/icons/linkedin-w.svg";
import mail_w from "../assets/icons/mail-w.png";

export function Contact({ conLinks }) {
  return (
    <>
      <div
        id="contact"
        className="flex flex-col md:flex-row items-center justify-center mb-[5vh] md:mb-[10vh] mt-[10vh] md:mt-[20vh] scroll-m-36"
      >
        <h2 className="text-4xl md:text-5xl md:text-end mb-5 md:mb-0 md:mr-10 font-bold font-mono text-light-purple">
          contact <br className="hidden md:block" />
          me
        </h2>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-row flex-nowrap justify-between w-full">
          {conLinks.map((link) => (
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
    </>
  );
}

import { useState } from "react";
import DASHYGON1 from '../assets/DASHYGON/DASHYGON-1.png'

export function ProjectContent() {

    return (
        <div className="flex flex-col items-center bg-dark-gray m-10 rounded-2xl drop-shadow-lg hover:drop-shadow-[0px_0px_20px_rgba(0,146,184,0.3)] hover:scale-102 transition-transform duration-150">
            <div className="flex flex-row justify-between items-center p-5 w-full">
                <div className="items-start">
                    <h1 className="font-extrabold text-5xl text-normal-cyan">DASHYGON</h1>
                </div>
                <img width="450px" src={DASHYGON1} alt="DASHYGON Main Menu" />
            </div>
        </div>
    );
}
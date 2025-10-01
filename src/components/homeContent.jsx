import { useState } from "react";

export function HomeContent() {
  return (
    <div className="flex flex-col items-center h-screen">
      <h1 className="text-4xl font-bold text-normal-cyan mt-10">
        Welcome to My Portfolio!
      </h1>
      <p className="text-lg text-dark-gray">Explore my projects and skills.</p>
    </div>
  );
}

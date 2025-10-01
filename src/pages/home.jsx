import { useState } from "react";
import { Navbar } from "../components/navbar";
import { HomeContent } from "../components/homeContent";
import { ProjectContent } from "../components/projectContent";

export function Home() {
  const [currentPage, setCurrentPage] = useState("Home");
  return (
    <>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {currentPage === "Home" && <HomeContent />}
      {currentPage === "Projects" && <ProjectContent />}
    </>
  );
}

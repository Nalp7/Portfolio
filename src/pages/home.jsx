import { useState } from "react";
import { Navbar } from "../components/navbar";
import { HomeContent } from "../components/homeContent";
import { ProjectContent } from "../components/projectContent";
import { Footer } from "../components/footer";

export function Home() {
  const [currentPage, setCurrentPage] = useState("Home");

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-grow">
        {currentPage === "Home" && <HomeContent />}
        {currentPage === "Projects" && <ProjectContent />}
      </main>
      <Footer />
    </div>
  );
}

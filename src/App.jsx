import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { NotFound } from "./pages/notFound";
import "./style/indexstyle.css";

function App() {
  return (
    <>
      <Home />
    </>
  );
}

export default App;

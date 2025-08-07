import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./Home.tsx";
import Header from "./components/Header/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="overflow-x-hidden">
      <Header />
      <Home />
    </div>
  </StrictMode>
);

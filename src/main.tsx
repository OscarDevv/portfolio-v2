import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.scss";
import { AppRouter } from "./router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>,
);

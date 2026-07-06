import { createRoot } from "react-dom/client";
import "./styles/index.scss";
import { AppRouter } from "./router";

createRoot(document.getElementById("root")!).render(<AppRouter />);

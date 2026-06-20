import { FaJava } from "react-icons/fa";
import {
  SiCss,
  SiGit,
  SiGithub,
  SiHtml5,
  SiIntellijidea,
  SiJavascript,
  SiPnpm,
  SiReact,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
  SiVscodium,
  SiVuedotjs,
} from "react-icons/si";

export interface JSONResponse {
  "Front-End": Tool[];
  Ferramentas: Tool[];
  "Em Aprendizagem": Tool[];
}

export const IconMap = {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiSass,
  SiReact,
  SiVite,
  SiVuedotjs,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiVscodium,
  SiVercel,
  SiPnpm,
  FaJava,
  SiIntellijidea,
} as const;

export type IconKey = keyof typeof IconMap;

interface Tool {
  name: string;
  icon: IconKey;
  color: string;
}

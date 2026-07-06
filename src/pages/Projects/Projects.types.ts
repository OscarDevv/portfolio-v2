import type { IconKey } from "../../types/toolsIcons";

export interface Project {
  name: string;
  description: string;
  image: string;
  hasWebsite: boolean;
  languages: IconKey[];
}

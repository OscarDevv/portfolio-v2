import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";

export interface ContactWay {
  name: string;
  icon: LucideIcon | IconType;
  content: string;
  link?: string;
}

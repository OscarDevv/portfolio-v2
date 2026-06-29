export type Languages =
  | "HTML"
  | "CSS"
  | "JavaScript"
  | "TypeScript"
  | "SASS"
  | "VueJS"
  | "Java";

export interface Repository {
  name: string;
  private?: boolean;
  html_url: string;
  description: string;
  pushed_at: string;
  homepage: string;
  languages: Record<Languages, number>;
}

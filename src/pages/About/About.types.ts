import type { IconKey } from "../../types/toolsIcons";

export interface JSONResponse {
  "Front-End": Tool[];
  Ferramentas: Tool[];
  "Em Aprendizagem": Tool[];
}

interface Tool {
  name: string;
  icon: IconKey;
  color: string;
}

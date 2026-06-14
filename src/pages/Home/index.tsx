import { useRef } from "react";
import { useWriteText } from "../../hooks/useWriteText";

export const Home = () => {
  const titleElement = useRef<HTMLHeadingElement>(null);
  const titleContent = useWriteText(
    "Desenvolvendo interfaces modernas e criativas.",
  );

  return (
    <>
      <h1 ref={titleElement}>{titleContent}</h1>
    </>
  );
};

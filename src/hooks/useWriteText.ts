import { useEffect, useState } from "react";

export const useWriteText = (target: string, speed: number = 30): string => {
  const [text, setText] = useState("");

  useEffect(() => {
    let frame = 0;

    const interval = setInterval(() => {
      frame++;

      setText(target.slice(0, frame));

      if (frame >= target.length) {
        clearInterval(interval);
        setText(target);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [target, speed]);

  return text;
};

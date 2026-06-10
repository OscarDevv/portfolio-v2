import { useEffect, useState } from "react";

export const useScrambleText = (target: string, speed: number = 30): string => {
  const [text, setText] = useState("");
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

  useEffect(() => {
    let frame = 0;

    const interval = setInterval(() => {
      const next = target
        .split("")
        .map((char, index) => {
          if (index < frame) return char;

          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");

      setText(next);

      frame++;

      if (frame > target.length) {
        clearInterval(interval);
        setText(target);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [target, speed]);

  return text;
};

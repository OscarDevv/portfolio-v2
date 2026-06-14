import { useRef, useState } from "react";
import { useWriteText } from "../../hooks/useWriteText";
import { motion } from "motion/react";
import styles from "./Home.module.scss";
import { Button } from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const [isGreetingHovered, setIsGreetingHovered] = useState(false);

  const titleElement = useRef<HTMLHeadingElement>(null);
  const titleContent = useWriteText(
    "Desenvolvendo interfaces modernas e criativas.",
    20,
  );

  const navigate = useNavigate();

  return (
    <>
      <p
        onMouseEnter={() => setIsGreetingHovered(true)}
        onMouseLeave={() => setIsGreetingHovered(false)}
        className={styles.p}
      >
        Olá, eu sou Oscar!
        <motion.span
          animate={
            isGreetingHovered
              ? { rotate: [0, 20, -10, 20, -10, 0] }
              : { rotate: 0 }
          }
          transition={{ duration: 0.75 }}
          className={styles.span}
        >
          👋
        </motion.span>
      </p>

      <h1 className={styles.h1} ref={titleElement}>
        {titleContent}
      </h1>

      <h2 className={styles.h2}>
        Desenvolvedor Front-End | Estudando Java e Back-End
      </h2>

      <div className={styles.buttonContainer}>
        <Button onClick={() => navigate("/projects")}>Ver projetos</Button>
        <Button onClick={() => navigate("/contact")}>Contato</Button>
      </div>
    </>
  );
};

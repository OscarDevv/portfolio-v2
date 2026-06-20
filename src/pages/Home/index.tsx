import { useWriteText } from "../../hooks/useWriteText";
import styles from "./Home.module.scss";
import { Button } from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const titleContent = useWriteText(
    "Desenvolvendo interfaces modernas e criativas.",
    20,
  );

  const navigate = useNavigate();

  return (
    <>
      <p className={styles.p}>
        Olá, eu sou Oscar!
        <span className={styles.span}>👋</span>
      </p>

      <h1 className={styles.h1}>{titleContent}</h1>

      <h2 className={styles.h2}>
        Desenvolvedor Front-End | Estudando Java e Back-End
      </h2>

      <div className={styles.buttonContainer}>
        <Button onClick={() => navigate("/projects")}>Ver projetos</Button>
        <Button onClick={() => navigate("/contact")}>Contato</Button>
      </div>
    </>
  );
}

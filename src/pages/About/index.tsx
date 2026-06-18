import pfp from "../../assets/images/Foto-Perfil.jpeg";
import { useScrambleText } from "../../hooks/useScrambleText";
import styles from "./About.module.scss";

export const About = () => {
  const name = useScrambleText("OSCAR", 100);

  return (
    <>
      <div className={styles.container}>
        <section>
          <a
            href="https://github.com/oscardevv"
            target="_blank"
            title="Navegar para a página do GitHub do Oscar"
          >
            <img className={styles.pfp} src={pfp} alt="Imagem do " />
          </a>

          <h1 className={styles.name}>{name}</h1>
        </section>
        <section className={styles.contentContainer}>
          <p className={styles.content}>
            Sou Oscar, um estudante apaixonado por tecnologia e desenvolvimento
            web.
          </p>
          <p className={styles.content}>
            Gosto de criar projetos, aprender coisas novas e entender como as
            aplicações funcionam por trás das telas.
          </p>
          <p className={styles.content}>
            Atualmente estudo React e TypeScript, e meu objetivo é evoluir cada
            vez mais como desenvolvedor e explorar tecnologias como Java e
            Spring Boot no futuro.
          </p>
        </section>
      </div>
    </>
  );
};

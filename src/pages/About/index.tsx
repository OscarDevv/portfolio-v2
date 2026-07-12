import { useEffect, useState } from "react";
import pfp from "../../assets/images/Foto-Perfil.jpeg";
import { Container } from "../../components/Container";
import { useScrambleText } from "../../hooks/useScrambleText";
import styles from "./About.module.scss";
import type { JSONResponse } from "./About.types";
import { ToolsIcons, type IconKey } from "../../types/toolsIcons";
import { Button } from "../../components/Button";
import { useWriteText } from "../../hooks/useWriteText";

export default function About() {
  const aboutTitle = useWriteText("Sobre", 75);
  const name = useScrambleText("OSCAR", 100);
  const [tools, setTools] = useState<JSONResponse>();

  useEffect(() => {
    const getDataFromJSON = async () => {
      try {
        const response: Response = await fetch("/tools.json");

        if (!response.ok) {
          throw new Error("Falha ao carregar a lista de habilidades em JSON.");
        }

        const data: JSONResponse = await response.json();

        if (data) {
          setTools(data);
        }
      } catch (error) {
        throw new Error(`Houve um erro desconhecido ao carregar o JSON.`, {
          cause: error,
        });
      }
    };

    getDataFromJSON();
  }, []);

  return (
    <>
      <div className={styles.container}>
        <section>
          <a
            href="https://github.com/oscardevv"
            target="_blank"
            title="Navegar para a página do GitHub do Oscar"
          >
            <img className={styles.pfp} src={pfp} alt="Imagem do Oscar" />
          </a>

          <h1 className={styles.name}>{name}</h1>
        </section>
        <section className={styles.contentContainer}>
          <h1 className="pageTitle">{aboutTitle}</h1>

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

          <h2 className={styles.techHeading}>Tecnologias</h2>

          {!tools && (
            <>
              <h3 className={styles.errorHeading}>
                Houve um erro ao carregar os dados em JSON.
              </h3>

              <Button
                onClick={() =>
                  (window.location.href =
                    "https://github.com/OscarDevv/portfolio-v2/issues")
                }
              >
                Criar uma Issue
              </Button>
            </>
          )}

          {tools && (
            <div className={styles.div}>
              <Container className={styles.toolColumn}>
                <h2 className={styles.sectionTitle}>Front-End</h2>

                <ul className={styles.ul}>
                  {tools &&
                    tools["Front-End"].map((tool, index) => {
                      const Icon = ToolsIcons[tool.icon as IconKey];

                      return (
                        <li key={index}>
                          <span className={styles.span}>{tool.name}</span>
                          {Icon && (
                            <Icon
                              aria-hidden="true"
                              focusable="false"
                              style={{ color: tool.color }}
                            />
                          )}
                        </li>
                      );
                    })}
                </ul>
              </Container>

              <Container className={styles.toolColumn}>
                <h2 className={styles.sectionTitle}>Ferramentas</h2>

                <ul className={styles.ul}>
                  {tools &&
                    tools["Ferramentas"].map((tool, index) => {
                      const Icon = ToolsIcons[tool.icon as IconKey];

                      return (
                        <li key={index}>
                          <span className={styles.span}>{tool.name}</span>
                          {Icon && (
                            <Icon
                              aria-hidden="true"
                              focusable="false"
                              style={{ color: tool.color }}
                            />
                          )}
                        </li>
                      );
                    })}
                </ul>
              </Container>

              <Container className={styles.toolColumn}>
                <h2 className={styles.sectionTitle}>Em aprendizagem</h2>

                <ul className={styles.ul}>
                  {tools &&
                    tools["Em Aprendizagem"].map((tool, index) => {
                      const Icon = ToolsIcons[tool.icon as IconKey];

                      return (
                        <li key={index}>
                          <span className={styles.span}>{tool.name}</span>
                          {Icon && (
                            <Icon
                              aria-hidden="true"
                              focusable="false"
                              style={{ color: tool.color }}
                            />
                          )}
                        </li>
                      );
                    })}
                </ul>
              </Container>
            </div>
          )}
        </section>
      </div>
    </>
  );
}

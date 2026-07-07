import { useEffect, useState } from "react";
import type { Languages, Repository } from "../../types/githubData";
import { GetAllRepos } from "../../services/github";
import styles from "./Projects.module.scss";
import { Eye, Info } from "lucide-react";
import { Container } from "../../components/Container";
import { Button } from "../../components/Button";
import { ToolsIcons, type IconKey } from "../../types/toolsIcons";

const languageIconMap: Partial<Record<Languages, IconKey>> = {
  HTML: "SiHtml5",
  CSS: "SiCss",
  JavaScript: "SiJavascript",
  TypeScript: "SiTypescript",
  SCSS: "SiSass",
  VueJS: "SiVuedotjs",
  Java: "FaJava",
};

export default function Projects() {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const cache = localStorage.getItem("repos-list-cache");
    const dueDate = localStorage.getItem("repos-cache-due-date");
    const now = Date.now();

    const applyData = async () => {
      try {
        if (cache && dueDate && Number(dueDate) > now) {
          setRepos(JSON.parse(cache));
          setLoading(false);
          return;
        }

        const repos = await GetAllRepos();

        if (repos) {
          setRepos(repos);
          localStorage.setItem("repos-list-cache", JSON.stringify(repos));
          localStorage.setItem(
            "repos-cache-due-date",
            String(Date.now() + 600000),
          );
        } else {
          throw new Error(`Erro ao buscar os repositórios. Dados: ${repos}`);
        }
      } catch (error) {
        setError(true);
        throw new Error(`Erro ao fazer a requesição.`, { cause: error });
      } finally {
        setLoading(false);
      }
    };

    applyData();
  }, []);

  return (
    <>
      <Container>
        <Info />
        <p>
          Nota: Todos os dados vem da API do GitHub, portanto, pode haver algum
          problema ao buscar eles.
        </p>
      </Container>

      {loading && <p className={styles.loading}>Carregando dados...</p>}

      {error && (
        <div className={styles.errorContainer}>
          <p>Erro ao carregar os dados.</p>
          <Button
            onClick={() =>
              (window.location.href =
                "https://github.com/OscarDevv/portfolio-v2/issues")
            }
          >
            Criar uma Issue
          </Button>
        </div>
      )}

      {repos && (
        <>
          <div className={styles.reposContainer}>
            {repos.map((repo, index) => {
              if (index > 12) return;

              return (
                <article className={styles.repo} key={index}>
                  <h2 className={styles.repoHeading}>{repo.name}</h2>
                  <p className={styles.repoDesc}>{repo.description}</p>

                  <ul className={styles.languageList}>
                    {Object.keys(repo.languages).map((lang) => {
                      const iconKey = languageIconMap[lang as Languages];
                      const Icon = iconKey ? ToolsIcons[iconKey] : null;

                      return (
                        <li
                          key={`${repo.name}-${lang}`}
                          className={styles.languageItem}
                        >
                          <span className={styles.languageLabel}>{lang}</span>
                          {Icon && <Icon />}
                        </li>
                      );
                    })}
                  </ul>
                  <div className={styles.actionButtons}>
                    <Button
                      onClick={() => (window.location.href = repo.html_url)}
                    >
                      Ver repositório
                    </Button>
                    {repo.homepage && (
                      <Button
                        onClick={() => (window.location.href = repo.homepage)}
                      >
                        Ver página web
                      </Button>
                    )}
                  </div>
                </article>
              );
            })}
          </div>

          <a
            href="https://github.com/OscarDevv?tab=repositories"
            target="_blank"
            className={styles.seeAll}
          >
            <Eye />
            <span>Ver todos os repositórios</span>
          </a>
        </>
      )}
    </>
  );
}

import { useEffect, useState } from "react";
import type { Repository } from "../../types/githubData";
import { GetAllRepos } from "../../services/github";

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
      {loading && <p>Carregando</p>}
      {repos.map((repo) => (
        <div key={repo.name}>
          <p>{repo.name}</p>
          <p>{repo.description}</p>
          {Object.keys(repo.languages).map((lang) => (
            <p>
              <b>{lang}</b>
            </p>
          ))}
        </div>
      ))}
      {error && <p>Erro</p>}
    </>
  );
}

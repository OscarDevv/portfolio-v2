import type { Languages, Repository } from "../../types/githubData";

const reposListKey = "https://api.github.com/users/oscardevv/repos";
const repoLanguagesListKey = (repo: string): string =>
  `https://api.github.com/repos/oscardevv/${repo}/languages`;

export const GetAllRepos = async (): Promise<Repository[]> => {
  try {
    const reposListRes = await fetch(reposListKey);
    if (!reposListRes.ok)
      throw new Error(
        `A response de lista de repositórios possui erros. Status: ${reposListRes.status}`,
      );
    const reposList: Repository[] = await reposListRes.json();

    const repos = await Promise.all(
      reposList
        .filter(
          (repo) => !repo.private && repo.name && repo.name !== "OscarDevv",
        )
        .map(async (repo) => {
          const repoLanguagesRes = await fetch(
            repoLanguagesListKey(repo.name));

          if (!repoLanguagesRes.ok)
            throw new Error(`Erro ao buscar linguagens de ${repo.name}`);

          const languages: Record<Languages, number> =
            await repoLanguagesRes.json();

          return {
            ...repo,
            languages,
          };
        }),
    );

    return repos;
  } catch (error) {
    throw new Error("Erro ao fazer a requesição.", { cause: error });
  }
};

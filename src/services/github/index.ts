import type { Languages, Repository } from "../../types/githubData";

const repositoryUrl = (suffix: string): string =>
  `https://api.github.com/repos/oscardevv/${suffix}`;

export const getRepo = async (
  repoName: string,
): Promise<Repository | undefined> => {
  try {
    // REPOSITÓRIO
    const repoResponse = await fetch(repositoryUrl(repoName));
    if (!repoResponse.ok)
      throw new Error(
        `Erro ao buscar o repositório ${repositoryUrl(repoName)}. Status: ${repoResponse.status}`,
      );

    const repoData: Repository = await repoResponse.json();
    if (!repoData.html_url || !repoData.name)
      throw new Error(
        `Os dados obtidos não foram os esperados. Dados: ${JSON.stringify(repoData)}`,
      );
    if (repoData.private) return;

    const { name, html_url, description, pushed_at, homepage } = repoData;

    // LINGUAGENS
    const langResponse = await fetch(repositoryUrl(`${repoName}/languages`));
    if (!langResponse.ok)
      throw new Error(
        `Erro ao buscar as linguagens do repositório ${repositoryUrl(repoName)}. Status: ${langResponse.status}`,
      );

    const langData: Record<Languages, number> = await langResponse.json();
    if (Object.keys(langData).length === 0)
      throw new Error(
        `Nenhuma linguagem apareceu nos dados. Dados: ${JSON.stringify(langData)}`,
      );

    return {
      name,
      html_url,
      description,
      pushed_at,
      homepage,
      languages: langData,
    };
  } catch (error) {
    throw new Error(`Erro desconhecido.`, { cause: error });
  }
};

const allRepositoriesKey = "https://api.github.com/users/oscardevv/repos";

export const getAllRepos = async (): Promise<string[]> => {
  try {
    const response = await fetch(allRepositoriesKey);
    if (!response.ok)
      throw new Error(
        `Erro ao buscar todos os repositórios. Status: ${response.status}`,
      );

    const data: Repository[] = await response.json();
    if (!Array.isArray(data) || data.length === 0)
      throw new Error(
        `Erro na resposta dos dados ou nenhuma resposta adquirida. Dados: ${JSON.stringify(data)}`,
      );

    return data.filter((repo) => !repo.private).map((repo) => repo.name);
  } catch (error) {
    throw new Error(`Erro desconhecido.`, { cause: error });
  }
};

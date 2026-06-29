import type { Languages, Repository } from "../../types/githubData";

const key = "https://api.github.com/repos/oscardevv";
const mergeKey = (suffix: string): string => `${key}/${suffix}`;

export const getRepo = async (
  repoName: string,
): Promise<Repository | undefined> => {
  try {
    // REPOSITÓRIO
    const repoResponse: Response = await fetch(mergeKey(repoName));
    if (!repoResponse.ok)
      throw new Error(
        `Erro ao buscar o repositório ${mergeKey(repoName)}. Status: ${repoResponse.status}`,
      );

    const repoData: Repository = await repoResponse.json();
    if (!repoData.html_url || !repoData.name)
      throw new Error(
        `Os dados obtidos não foram os esperados. Dados: ${JSON.stringify(repoData)}`,
      );
    if (repoData.private) return;

    const { name, html_url, description, pushed_at, homepage } = repoData;

    // LINGUAGENS
    const langResponse: Response = await fetch(
      mergeKey(`${repoName}/languages`),
    );
    if (!langResponse.ok)
      throw new Error(
        `Erro ao buscar as linguagens do repositório ${mergeKey(repoName)}. Status: ${langResponse.status}`,
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

import { IGithubRepository } from "../types";

export interface IGithubRepoResponse {
  id: string;
  name: string;
  full_name: string;
  description: string;
  language: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
  owner: {
    login: string;
  };
}

export const fetchGithubProject = async (
  projectId: string,
): Promise<IGithubRepository> => {
  const response = await fetch(`https://api.github.com/repos/${projectId}`);

  const repository = (await response.json()) as IGithubRepoResponse;

  return {
    id: repository.id,
    owner: repository.owner.login,
    name: repository.name,
    fullName: repository.full_name,
    description: repository.description,
    language: repository.language,
    htmlUrl: repository.html_url,
    stargazersCount: repository.stargazers_count,
    forksCount: repository.forks_count,
    fork: repository.fork,
  };
};

export const fetchGithubProjects = (projectIds: string[]) =>
  Promise.all(projectIds.map((projectId) => fetchGithubProject(projectId)));

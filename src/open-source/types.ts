export interface IGithubRepository {
  id: string;
  owner: string;
  name: string;
  fullName: string;
  description: string;
  language: string;
  htmlUrl: string;
  stargazersCount: number;
  forksCount: number;
  fork: boolean;
}

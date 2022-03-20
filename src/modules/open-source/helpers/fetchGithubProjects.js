import fetchGithubProject from './fetchGithubProject';

const fetchGithubProjects = (projectIds) =>
  Promise.all(projectIds.map((projectId) => fetchGithubProject(projectId)));

export default fetchGithubProjects;

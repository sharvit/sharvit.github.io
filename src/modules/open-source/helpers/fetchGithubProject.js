const fetchGitubProject = async (projectId) => {
  const response = await fetch(`https://api.github.com/repos/${projectId}`);
  const repository = await response.json();

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

export default fetchGitubProject;

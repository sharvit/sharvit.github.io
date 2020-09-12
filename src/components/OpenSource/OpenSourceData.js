export const getUserRepositories = async (username) => {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos`
  );
  const repositories = await response.json();

  return repositories.map((repository) => ({
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
  }));
};

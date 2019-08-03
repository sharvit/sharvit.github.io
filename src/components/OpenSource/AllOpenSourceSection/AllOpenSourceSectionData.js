import { getUserRepositories } from '../OpenSourceData';

export const getAllOpenSourceProjects = async () => {
  try {
    const repositories = await getUserRepositories('sharvit');

    return repositories
      .filter(({ fork }) => !fork)
      .sort((a, b) => a.stargazersCount - b.stargazersCount)
      .reverse();
  } catch (error) {
    console.error(error); // eslint-disable-line no-console
  }

  return [];
};

import { useEffect, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const fetchProject = async (projectId) => {
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

const fetchProjects = (projectIds) =>
  Promise.all(projectIds.map((projectId) => fetchProject(projectId)));

const useOpenSourceProjectsIds = (top) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          openSourceProjects
        }
      }
    }
  `);

  return top
    ? site.siteMetadata.openSourceProjects.slice(0, top)
    : site.siteMetadata.openSourceProjects;
};

export const useOpenSourceProjects = (top) => {
  const [openSourceProjects, setOpenSourceProjects] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const openSourceProjectsIds = useOpenSourceProjectsIds(top);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const projects = await fetchProjects(openSourceProjectsIds);
        setOpenSourceProjects(projects);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...openSourceProjectsIds]);

  return { openSourceProjects, error, isLoading };
};

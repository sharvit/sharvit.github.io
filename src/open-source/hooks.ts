import { useMemo, useState, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";

import { fetchGithubProjects } from "./utils";
import { IGithubRepository } from "./types";

// eslint-disable-next-line no-undef
type OpenSourceProjectsQuery = Queries.OpenSourceProjectsQuery;

export const useOpenSourceProjectsIds = (top?: number) => {
  const response = useStaticQuery<OpenSourceProjectsQuery>(graphql`
    query OpenSourceProjects {
      file(
        sourceInstanceName: { eq: "bio" }
        name: { eq: "open_source_projects" }
      ) {
        childYaml {
          open_source_projects
        }
      }
    }
  `);

  const openSourceProjects = response.file?.childYaml
    ?.open_source_projects as string[];

  return useMemo(() => {
    if (top) {
      return openSourceProjects.slice(0, top);
    }
    return openSourceProjects;
  }, [openSourceProjects, top]);
};

export const useOpenSourceProjects = (top?: number) => {
  const [openSourceProjects, setOpenSourceProjects] = useState<
    IGithubRepository[]
  >([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const openSourceProjectsIds = useOpenSourceProjectsIds(top);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const projects = await fetchGithubProjects(openSourceProjectsIds);
      setOpenSourceProjects(projects);

      setIsLoading(false);
    };

    fetchData().catch((err) => {
      setError((err as Error).message);
      setIsLoading(false);
    });
  }, [openSourceProjectsIds]);

  return {
    openSourceProjectsIds,
    openSourceProjects,
    error,
    isLoading,
  };
};

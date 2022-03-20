import { useEffect, useState } from 'react';

import { fetchGithubProjects } from '../helpers';
import useOpenSourceProjectsIds from './useOpenSourceProjectsIds';

const useOpenSourceProjects = (top) => {
  const [openSourceProjects, setOpenSourceProjects] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const openSourceProjectsIds = useOpenSourceProjectsIds(top);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const projects = await fetchGithubProjects(openSourceProjectsIds);
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

export default useOpenSourceProjects;

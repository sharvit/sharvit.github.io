import React, { useState, useEffect } from 'react';

import { getLatestOpenSourceProjects } from './LatestOpenSourceData';
import LatestOpenSourceSection from './LatestOpenSourceSection';

const Component = () => {
  const [repositories, setRepositories] = useState([]);

  const loadRepositories = async () => {
    setRepositories(await getLatestOpenSourceProjects());
  };

  useEffect(() => {
    loadRepositories();
  }, []);

  return <LatestOpenSourceSection repositories={repositories} />;
};

export default Component;

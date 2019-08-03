import React, { useState, useEffect } from 'react';

import { getAllOpenSourceProjects } from './AllOpenSourceSectionData';
import AllOpenSourceSection from './AllOpenSourceSection';

const Component = () => {
  const [repositories, setRepositories] = useState([]);

  const loadRepositories = async () => {
    setRepositories(await getAllOpenSourceProjects());
  };

  useEffect(() => {
    loadRepositories();
  }, []);

  return <AllOpenSourceSection repositories={repositories} />;
};

export default Component;

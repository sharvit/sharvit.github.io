import React from 'react';

import { useOpenSourceProjects } from '../OpenSourceData';
import AllOpenSourceSection from './AllOpenSourceSection';

const Component = () => {
  const { openSourceProjects, error, isLoading } = useOpenSourceProjects();

  return (
    <AllOpenSourceSection
      repositories={openSourceProjects}
      error={error}
      isLoading={isLoading}
    />
  );
};

export default Component;

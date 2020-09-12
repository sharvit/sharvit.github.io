import React from 'react';

import { useOpenSourceProjects } from '../OpenSourceData';
import LatestOpenSourceSection from './LatestOpenSourceSection';

const Component = () => {
  const { openSourceProjects, error, isLoading } = useOpenSourceProjects(6);

  return (
    <LatestOpenSourceSection
      repositories={openSourceProjects}
      isLoading={isLoading}
      error={error}
    />
  );
};
export default Component;

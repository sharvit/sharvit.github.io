import React from 'react';
import { getProfileData } from './ProfileSectionData';
import ProfileSection from './ProfileSection';

const Component = () => {
  const { title, description, author } = getProfileData();

  return (
    <ProfileSection
      name={title}
      description={description}
      avatar={author.avatar}
    />
  );
};

export default Component;

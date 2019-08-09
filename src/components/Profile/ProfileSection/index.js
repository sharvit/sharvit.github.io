import React from 'react';
import { getProfileData } from './ProfileSectionData';
import ProfileSection from './ProfileSection';

const Component = () => {
  const { title, description, avatar, bio } = getProfileData();

  return (
    <ProfileSection
      name={title}
      description={description}
      avatar={avatar}
      bio={bio}
    />
  );
};

export default Component;

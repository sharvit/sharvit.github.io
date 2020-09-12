import React from 'react';
import { useProfileData } from './ProfileSectionData';
import ProfileSection from './ProfileSection';

const Component = () => {
  const { title, description, avatar, bio } = useProfileData();

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

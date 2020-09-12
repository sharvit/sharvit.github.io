import React from 'react';
import { useProfileData } from './ProfileSectionData';
import ProfileSection from './ProfileSection';

const Component = (props) => {
  const { title, description, avatar, bio } = useProfileData();

  return (
    <ProfileSection
      name={title}
      description={description}
      avatar={avatar}
      bio={bio}
      {...props}
    />
  );
};

export default Component;

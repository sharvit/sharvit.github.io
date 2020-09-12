import React from 'react';

import { useSocialLinks } from './ProfileIconLinksData';
import ProfileIconLinks from './ProfileIconLinks';

export default () => {
  const socialLinks = useSocialLinks();

  return <ProfileIconLinks socialLinks={socialLinks} />;
};

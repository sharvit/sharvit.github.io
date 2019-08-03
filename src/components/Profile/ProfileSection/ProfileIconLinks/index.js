import React from 'react';

import { getSocialLinks } from './ProfileIconLinksData';
import ProfileIconLinks from './ProfileIconLinks';

export default () => {
  const socialLinks = getSocialLinks();

  return <ProfileIconLinks socialLinks={socialLinks} />;
};

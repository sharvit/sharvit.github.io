import React from 'react';

import { useSocialLinks } from '../../hooks';
import { SocialLinkItem } from './SocialLinkItem';

import * as styles from './SocialLinks.module.css';

export const SocialLinks = () => {
  const socialLinks = useSocialLinks();

  return (
    <div className={styles.socialLinks}>
      {socialLinks.map((link) => (
        <SocialLinkItem key={link.type} {...link} />
      ))}
    </div>
  );
};

import React from 'react';
import classNames from 'classnames';

import { ISocialLink } from './types';
import { useSocialLinkIcon, useSocialLinkClassName } from './hooks';

import * as styles from './SocialLinks.module.css';

export const SocialLinkItem = ({ type, href, label }: ISocialLink) => {
  const Icon = useSocialLinkIcon(type);
  const className = useSocialLinkClassName(type);

  return (
    <a href={href} className={classNames(styles.socialLink, className)}>
      <Icon /> {label}
    </a>
  );
};

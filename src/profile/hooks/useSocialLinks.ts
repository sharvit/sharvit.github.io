import { useMemo } from 'react';

import { ISocialLink } from '../components/SocialLinks/types';
import { useAuthorProfile } from './useAuthorProfile';

export const useSocialLinks = (): ISocialLink[] => {
  const profile = useAuthorProfile();

  return useMemo(
    () => [
      {
        type: 'github',
        href: `https://github.com/${profile.github}`,
        label: profile.github,
      },
      {
        type: 'twitter',
        href: `https://www.twitter.com/${profile.twitter}`,
        label: profile.twitter,
      },
      {
        type: 'stackoverflow',
        href: `https://stackoverflow.com/users/${profile.stackoverflow}`,
        label: profile.nickname,
      },
      {
        type: 'email',
        href: `mailto:${profile.email}`,
        label: profile.email,
      },
    ],
    [profile]
  );
};

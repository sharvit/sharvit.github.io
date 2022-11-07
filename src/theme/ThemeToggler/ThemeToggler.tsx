import React from 'react';
import classNames from 'classnames';
import { useColorSchemeToggler } from '../ThemeHooks';

import * as styles from './ThemeToggler.module.css';

export interface IThemeToggler {
  className?: string;
}

export const ThemeToggler = ({ className }: IThemeToggler) => {
  const toggleColorScheme = useColorSchemeToggler();

  return (
    <button
      className={classNames(styles.themeToggler, className)}
      title="Toggles light & dark"
      onClick={toggleColorScheme}
    >
      <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
        {/* moon */}
        <mask id="moon" className={styles.moon}>
          <rect x="0" y="0" width="100%" height="100%" fill="white" />
          <circle cx="40" cy="8" r="11" fill="black" />
        </mask>
        {/* sun */}
        <circle
          className={styles.sun}
          cx="12"
          cy="12"
          r="11"
          mask="url(#moon)"
        />
        {/* sun beams */}
        <g className={styles.sunBeams}>
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </g>
      </svg>
    </button>
  );
};

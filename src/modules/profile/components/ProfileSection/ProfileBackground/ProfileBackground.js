import React, { useContext } from 'react';
import classNames from 'classnames';

import LayoutContext from '../../../../../components/Layout/LayoutContext';
import * as styles from './ProfileBackground.module.scss';

const ProfileBackground = () => {
  const {
    navigation: { collapse },
  } = useContext(LayoutContext);

  return (
    <div
      className={classNames(styles.container, {
        [styles.navbarCollapsed]: collapse,
      })}
    >
      <div className={styles.filter} />
    </div>
  );
};

export default ProfileBackground;

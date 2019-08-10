import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './ProfileBackground.module.scss';

const ProfileBackground = ({ navbarCollapsed }) => (
  <div
    className={classNames(styles.container, {
      [styles.navbarCollapsed]: navbarCollapsed,
    })}
  >
    <div className={styles.filter} />
  </div>
);

ProfileBackground.propTypes = {
  navbarCollapsed: PropTypes.bool,
};

ProfileBackground.defaultProps = {
  navbarCollapsed: false,
};

export default ProfileBackground;

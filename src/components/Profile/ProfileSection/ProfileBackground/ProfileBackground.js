import React from 'react';
// import PropTypes from 'prop-types';

import styles from './ProfileBackground.module.scss';

const ProfileBackground = () => (
  <div
    className={styles.container}
    style={{
      backgroundImage: 'yooo',
    }}
  >
    <div className={styles.filter} />
  </div>
);

ProfileBackground.propTypes = {};

ProfileBackground.defaultProps = {};

export default ProfileBackground;

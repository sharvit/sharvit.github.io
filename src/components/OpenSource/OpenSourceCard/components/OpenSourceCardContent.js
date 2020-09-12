import React from 'react';
import PropTypes from 'prop-types';

import OpenSourceCardTitle from './OpenSourceCardTitle';

import styles from '../OpenSourceCard.module.scss';

const OpenSourceCardContent = ({ owner, name, description }) => (
  <div className={styles.content}>
    <OpenSourceCardTitle owner={owner} name={name} />
    <p className={styles.description}>{description}</p>
  </div>
);

OpenSourceCardContent.propTypes = {
  owner: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
};

OpenSourceCardContent.defaultProps = {
  owner: '',
  name: '',
  description: '',
};

export default OpenSourceCardContent;

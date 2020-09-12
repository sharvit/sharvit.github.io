import React from 'react';
import PropTypes from 'prop-types';

import OpenSourceCardTitleIcon from './OpenSourceCardTitleIcon';
import OpenSourceCardTitleLink from './OpenSourceCardTitleLink';

import styles from '../OpenSourceCard.module.scss';

const OpenSourceCardTitle = ({ owner, name }) => (
  <h4 className={styles.title}>
    <OpenSourceCardTitleIcon />
    <OpenSourceCardTitleLink owner={owner} name={name} />
  </h4>
);

OpenSourceCardTitle.propTypes = {
  owner: PropTypes.string,
  name: PropTypes.string,
};

OpenSourceCardTitle.defaultProps = {
  owner: '',
  name: '',
};

export default OpenSourceCardTitle;

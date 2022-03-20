import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import * as styles from '../OpenSourceCard.module.scss';

const OpenSourceCardTitleLink = ({ owner, name }) => (
  <OutboundLink
    className={classNames(styles.titleLink)}
    target="_blank"
    rel="noopener noreferrer"
    href={`https://github.com/${owner}/${name}`}
  >
    <span>{owner}</span>/<span className={styles.repoName}>{name}</span>
  </OutboundLink>
);

OpenSourceCardTitleLink.propTypes = {
  owner: PropTypes.string,
  name: PropTypes.string,
};

OpenSourceCardTitleLink.defaultProps = {
  owner: '',
  name: '',
};

export default OpenSourceCardTitleLink;

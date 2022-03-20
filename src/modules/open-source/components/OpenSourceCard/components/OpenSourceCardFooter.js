import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import OpenSourceCardFooterLangIcon from './OpenSourceCardFooterLangIcon';
import OpenSourceCardFooterStarIcon from './OpenSourceCardFooterStarIcon';
import OpenSourceCardFooterForksIcon from './OpenSourceCardFooterForksIcon';

import * as styles from '../OpenSourceCard.module.scss';

const OpenSourceCardFooter = ({
  language,
  fullName,
  stargazersCount,
  forksCount,
}) => (
  <div className={classNames('card-footer', styles.footer)}>
    <span className={styles.footerItem}>
      <OpenSourceCardFooterLangIcon />{' '}
      <span itemProp="programmingLanguage">{language}</span>
    </span>
    <OutboundLink
      href={`https://github.com/${fullName}/stargazers`}
      className={styles.footerItem}
      target="_blank"
      rel="noopener noreferrer"
    >
      <OpenSourceCardFooterStarIcon /> {stargazersCount}
    </OutboundLink>
    <OutboundLink
      href={`https://github.com/${fullName}/network/members`}
      className={styles.footerItem}
      target="_blank"
      rel="noopener noreferrer"
    >
      <OpenSourceCardFooterForksIcon /> {forksCount}
    </OutboundLink>
  </div>
);

OpenSourceCardFooter.propTypes = {
  fullName: PropTypes.string,
  language: PropTypes.string,
  stargazersCount: PropTypes.number,
  forksCount: PropTypes.number,
};

OpenSourceCardFooter.defaultProps = {
  fullName: '',
  language: '',
  stargazersCount: 0,
  forksCount: 0,
};

export default OpenSourceCardFooter;

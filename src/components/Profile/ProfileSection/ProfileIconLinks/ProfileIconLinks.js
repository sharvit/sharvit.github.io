import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import styles from './ProfileIconLinks.module.scss';

const ProfileIconLinks = ({ socialLinks }) => (
  <p className={styles.container}>
    {socialLinks.map(
      ({ id, label, link, pdfLink, buttonClassName, iconClassName }) => (
        <React.Fragment key={id}>
          <OutboundLink
            className={classNames(buttonClassName, styles.button)}
            href={link}
            data-pdf-link={pdfLink || link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={classNames(iconClassName, styles.icon)} />
            <span className={styles.label}>{label}:</span>{' '}
          </OutboundLink>{' '}
        </React.Fragment>
      )
    )}
  </p>
);

ProfileIconLinks.propTypes = {
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      link: PropTypes.string,
      pdfLink: PropTypes.string,
      buttonClassName: PropTypes.string,
      iconClassName: PropTypes.string,
    })
  ),
};

ProfileIconLinks.defaultProps = {
  socialLinks: [],
};

export default ProfileIconLinks;

import React from 'react';
import classNames from 'classnames';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import { useSocialLinks } from '../../../hooks';
import * as styles from './ProfileIconLinks.module.scss';

const ProfileIconLinks = () => {
  const socialLinks = useSocialLinks();

  return (
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
};

export default ProfileIconLinks;

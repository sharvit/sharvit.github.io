import React from 'react';
import PropTypes from 'prop-types';

const ProfileIconLinks = ({ socialLinks }) => (
  <p>
    {socialLinks.map(({ id, link, buttonClassName, iconClassName }) => (
      <React.Fragment key={id}>
        <a
          className={buttonClassName}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={iconClassName} />
        </a>{' '}
      </React.Fragment>
    ))}
  </p>
);

ProfileIconLinks.propTypes = {
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      link: PropTypes.string,
      buttonClassName: PropTypes.string,
      iconClassName: PropTypes.string,
    })
  ),
};

ProfileIconLinks.defaultProps = {
  socialLinks: [],
};

export default ProfileIconLinks;

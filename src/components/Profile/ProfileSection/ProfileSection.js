import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import ProfileBackground from './ProfileBackground';
import ProfileIconLinks from './ProfileIconLinks';

import styles from './ProfileSection.module.scss';

const ProfileSection = ({ name, description, avatar, bio, button }) => {
  let buttonNode = null;

  if (button === 'navigate') {
    buttonNode = (
      <Link to="/about" className="btn btn-danger btn-fill">
        SEE FULL BIO
      </Link>
    );
  }

  if (button === 'download') {
    buttonNode = (
      <button
        onClick={() => window.print()}
        className="btn btn-danger btn-fill"
      >
        DOWNLOAD RESUME PDF
      </button>
    );
  }

  return (
    <>
      <ProfileBackground />
      <header className={`${styles.profileSection} section-nude`}>
        <div className="container">
          <div className={`row ${styles.ownerAvatar}`}>
            <div className="col-md-2 col-md-offset-5 col-sm-4 col-sm-offset-4 col-xs-6 col-xs-offset-3 text-center">
              <div className={styles.avatar}>
                <img
                  src={avatar}
                  alt="Avi Sharvit Avatar"
                  className="img-circle img-no-padding img-responsive"
                />
              </div>
            </div>
          </div>
          <div className={`row ${styles.owner}`}>
            <div className="col-md-6 col-md-offset-3 text-center">
              <h1 className={styles.name}>
                {name}
                <br />
                <small>{description}</small>
              </h1>
            </div>
          </div>
          <div className={`row ${styles.ownerContact}`}>
            <div className="col-md-6 col-md-offset-3 text-center">
              <ProfileIconLinks />
            </div>
          </div>
          <div className={`row ${styles.ownerAbout}`}>
            <div className="col-md-6 col-md-offset-3 text-center">
              <div dangerouslySetInnerHTML={{ __html: bio }} />
              <div className={styles.resumeButton}>{buttonNode}</div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

ProfileSection.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  button: PropTypes.oneOf(['navigate', 'print']),
};

ProfileSection.defaultProps = {
  button: null,
};

export default ProfileSection;

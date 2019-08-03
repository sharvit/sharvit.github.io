import React from 'react';
import PropTypes from 'prop-types';

import ProfileBackground from './ProfileBackground';
import ProfileIconLinks from './ProfileIconLinks';

import styles from './ProfileSection.module.scss';

const ProfileSection = ({ name, description, avatar }) => (
  <>
    <ProfileBackground />
    <div className={`${styles.profileSection} section-nude`}>
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
            <p>
              Expert full stack software developer with more than 12 years of
              experience.
              <br />I started to learn and write code when I was 10 years old
              because I thought that this very cool and it can actually give me
              super powers.
            </p>
            <p>
              All my knowledge is from self-learning and I don’t believe that a
              course or an academic degree can make you a developer. In my
              opinion, self-learning is the best way to control the bits and
              bytes.
            </p>
            <div className={styles.resumeButton}>
              <a
                href="/avi-sharvit-resume.pdf"
                className="btn btn-danger btn-fill"
              >
                DOWNLOAD RESUME PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

ProfileSection.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

ProfileSection.defaultProps = {};

export default ProfileSection;

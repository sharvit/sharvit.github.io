import React from 'react';
import PropTypes from 'prop-types';

const AboutSection = ({ aboutHtml }) => (
  <div className="about-section section-white">
    <div className="container">
      <div className="row">
        <div
          className="col-md-10 col-md-offset-1"
          dangerouslySetInnerHTML={{ __html: aboutHtml }}
        />
      </div>
    </div>
  </div>
);

AboutSection.propTypes = {
  aboutHtml: PropTypes.string,
};

AboutSection.defaultProps = {
  aboutHtml: '',
};

AboutSection.defaultProps = {};

export default AboutSection;

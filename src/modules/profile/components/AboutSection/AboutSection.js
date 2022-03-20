import React from 'react';

import { useAboutHTML } from '../../hooks';

const AboutSection = () => {
  const aboutHtml = useAboutHTML();

  return (
    <main className="about-section section-white">
      <div className="container">
        <div className="row">
          <div
            className="col-md-10 col-md-offset-1"
            dangerouslySetInnerHTML={{ __html: aboutHtml }}
          />
        </div>
      </div>
    </main>
  );
};

export default AboutSection;

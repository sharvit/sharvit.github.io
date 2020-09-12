import React from 'react';
import { useAboutHTML } from './AboutSectionData';
import AboutSection from './AboutSection';

const Component = () => <AboutSection aboutHtml={useAboutHTML()} />;

export default Component;

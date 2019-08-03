import React from 'react';
import { getAboutHTML } from './AboutSectionData';
import AboutSection from './AboutSection';

const Component = () => <AboutSection aboutHtml={getAboutHTML()} />;

export default Component;

import React from 'react';

import { Layout, Seo } from '../components';
import Breadcrumbs from '../components/Layout/components/Breadcrumbs';
import { ProfileSection, AboutSection } from '../modules/profile';

export const Head = () => <Seo title="About" />;

const AboutPage = () => (
  <Layout transparent>
    <ProfileSection button="download" />
    <Breadcrumbs
      items={[
        { title: 'Avi Sharvit', path: '/' },
        { title: 'About', path: '/about' },
      ]}
    />
    <AboutSection />
  </Layout>
);

export default AboutPage;

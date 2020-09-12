import React from 'react';
import Layout from '../components/Layout';
import Breadcrumbs from '../components/Layout/Breadcrumbs';
import SEO from '../components/SEO';
import ProfileSection from '../components/Profile/ProfileSection';
import AboutSection from '../components/Profile/AboutSection';

const AboutPage = () => (
  <Layout transparent>
    <SEO title="About" />
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

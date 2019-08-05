import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import ProfileSection from '../components/Profile/ProfileSection';
import AboutSection from '../components/Profile/AboutSection';

const AboutPage = () => (
  <Layout transparent>
    <SEO title="About" />
    <ProfileSection />
    <AboutSection />
  </Layout>
);

export default AboutPage;

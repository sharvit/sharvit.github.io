import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import ProfileSection from '../components/Profile/ProfileSection';
import AboutSection from '../components/Profile/AboutSection';

const AboutPage = () => (
  <Layout transparent>
    <SEO title="About" />
    <ProfileSection
      name="Avi Sharvit"
      description="Expert Full Stack Developer"
      avatar="https://avatars0.githubusercontent.com/u/1262502"
    />
    <AboutSection />
  </Layout>
);

export default AboutPage;

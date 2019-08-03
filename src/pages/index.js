import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import ProfileSection from '../components/Profile/ProfileSection';
import LatestOpenSourceSection from '../components/OpenSource/LatestOpenSourceSection';

const IndexPage = () => (
  <Layout transparent>
    <SEO title="Home" />
    <ProfileSection
      name="Avi Sharvit"
      description="Expert Full Stack Developer"
      avatar="https://avatars0.githubusercontent.com/u/1262502"
    />
    <LatestOpenSourceSection />
  </Layout>
);

export default IndexPage;

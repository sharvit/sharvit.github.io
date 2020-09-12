import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import ProfileSection from '../components/Profile/ProfileSection';
import LatestOpenSourceSection from '../components/OpenSource/LatestOpenSourceSection';
import LatestBlogPostsSection from '../components/Blog/LatestBlogPostsSection';

const IndexPage = () => (
  <Layout transparent>
    <SEO />
    <ProfileSection button="navigate" />
    <LatestOpenSourceSection />
    <LatestBlogPostsSection />
  </Layout>
);

export default IndexPage;

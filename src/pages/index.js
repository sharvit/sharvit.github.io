import React from 'react';

import { Layout, Seo } from '../components';

import { ProfileSection } from '../modules/profile';
import { LatestBlogPostsSection } from '../modules/blog';
import { LatestOpenSourceSection } from '../modules/open-source';

export const Head = () => <Seo />;

const IndexPage = () => (
  <Layout transparent>
    <ProfileSection button="navigate" />
    <LatestOpenSourceSection />
    <LatestBlogPostsSection />
  </Layout>
);

export default IndexPage;

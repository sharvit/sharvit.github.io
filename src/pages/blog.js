import React from 'react';

import { Layout, Seo } from '../components';
import { AllBlogPostsSection } from '../modules/blog';

export const Head = () => <Seo title="Blog" />;

const BlogPage = () => (
  <Layout breadcrumbs={[{ title: 'Blog', path: '/blog' }]}>
    <AllBlogPostsSection />
  </Layout>
);

export default BlogPage;

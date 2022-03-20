import React from 'react';

import { Layout, Seo } from '../components';
import { AllBlogPostsSection } from '../modules/blog';

const BlogPage = () => (
  <Layout breadcrumbs={[{ title: 'Blog', path: '/blog' }]}>
    <Seo title="Blog" />
    <AllBlogPostsSection />
  </Layout>
);

export default BlogPage;

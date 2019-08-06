import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import AllBlogPostsSection from '../components/Blog/AllBlogPostsSection';

const BlogPage = () => (
  <Layout breadcrumbs={[{ title: 'Blog', path: '/blog' }]}>
    <SEO title="Blog" />
    <AllBlogPostsSection />
  </Layout>
);

export default BlogPage;

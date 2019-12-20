import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import BlogPost from '../components/Blog/BlogPost';

const PostTemplate = ({
  pageContext: {
    name,
    date,
    postPath,
    postUrl,
    html,
    excerpt,
    title,
    coverImage,
  },
}) => (
  <Layout
    breadcrumbs={[
      { title: 'Blog', path: '/blog' },
      { title, path: postPath },
    ]}
  >
    <SEO title={title} description={excerpt} />
    <BlogPost
      id={name}
      title={title}
      coverImage={coverImage}
      date={new Date(date)}
      url={postUrl}
      html={html}
    />
  </Layout>
);

PostTemplate.propTypes = {
  pageContext: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    postPath: PropTypes.string.isRequired,
    postUrl: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    html: PropTypes.string.isRequired,
    coverImage: PropTypes.object,
  }).isRequired,
};

export default PostTemplate;

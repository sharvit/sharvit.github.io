import React from 'react';
import PropTypes from 'prop-types';

import { Layout, Seo } from '../components';
import { BlogPost } from '../modules/blog';

// eslint-disable-next-line react/prop-types
export const Head = ({ pageContext: { excerpt, title } }) => (
  <Seo title={title} description={excerpt} />
);

const PostTemplate = ({
  pageContext: { name, date, postPath, postUrl, html, title, coverImage },
}) => (
  <Layout
    breadcrumbs={[
      { title: 'Blog', path: '/blog' },
      { title, path: postPath },
    ]}
  >
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
    html: PropTypes.string.isRequired,
    coverImage: PropTypes.object,
  }).isRequired,
};

export default PostTemplate;

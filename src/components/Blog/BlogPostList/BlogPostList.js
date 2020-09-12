import React from 'react';
import PropTypes from 'prop-types';

import BlogPostListItem from './BlogPostListItem';
import { useBlogPostsList } from './BlogPostListData';

const BlogPostList = ({ limit }) => (
  <div className="articles">
    {useBlogPostsList(limit).map((post) => (
      <BlogPostListItem key={post.path} {...post} />
    ))}
  </div>
);

BlogPostList.propTypes = {
  limit: PropTypes.number,
};

BlogPostList.defaultProps = {
  limit: 1000,
};

export default BlogPostList;

import React from 'react';
import PropTypes from 'prop-types';

import BlogPostListItem from './BlogPostListItem';
import { useBlogPosts } from '../../hooks';

const BlogPostList = ({ limit }) => {
  const blogPosts = useBlogPosts();

  return (
    <div className="articles">
      {blogPosts?.slice(0, limit).map((post) => (
        <BlogPostListItem key={post.path} {...post} />
      ))}
    </div>
  );
};

BlogPostList.propTypes = {
  limit: PropTypes.number,
};

BlogPostList.defaultProps = {
  limit: 1000,
};

export default BlogPostList;

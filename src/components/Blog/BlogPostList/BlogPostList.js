import React from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';

import BlogPostListItem from './BlogPostListItem';
import { getBlogPostsList } from './BlogPostListData';
// import styles from './LatestBlogPostsSection.module.scss';

const BlogPostList = ({ limit }) => (
  <div className="articles">
    {getBlogPostsList(limit).map(post => (
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

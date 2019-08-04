import React from 'react';
import classNames from 'classnames';
import { Link } from 'gatsby';

import BlogPostList from './BlogPostList';
import styles from './LatestBlogPostsSection.module.scss';

const LatestBlogPostsSection = () => (
  <div className={classNames('section section-white', styles.container)}>
    <div className="container">
      <div className="row">
        <div className="col-md-10 col-md-offset-1">
          <div className="text-center">
            <h2>Latest Blog Posts</h2>
          </div>
        </div>
      </div>

      <BlogPostList limit={3} />

      <div className={classNames('row', styles.morePostsRow)}>
        <div className="col-md-10 col-md-offset-1">
          <div className="text-center">
            <Link to="/blog" className="btn btn-fill btn-primary btn-lg">
              All Posts
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default LatestBlogPostsSection;

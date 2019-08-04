import React from 'react';
import BlogPostList from './BlogPostList';

const AllBlogPostsSection = () => (
  <div className="section posts-section section-blog-list section-nude">
    <div className="container">
      <div className="row">
        <div className="col-md-10 col-md-offset-1">
          <div className="text-center">
            <h2>Latest Blog Posts</h2>
          </div>
        </div>
      </div>

      <BlogPostList limit={1000} />
    </div>
  </div>
);

export default AllBlogPostsSection;

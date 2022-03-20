import React from 'react';
import BlogPostList from '../BlogPostList';

const AllBlogPostsSection = () => (
  <main className="section posts-section section-blog-list section-nude">
    <div className="container">
      <div className="row">
        <div className="col-md-10 col-md-offset-1">
          <div className="text-center">
            <h1>Latest Blog Posts</h1>
          </div>
        </div>
      </div>

      <BlogPostList limit={1000} />
    </div>
  </main>
);

export default AllBlogPostsSection;

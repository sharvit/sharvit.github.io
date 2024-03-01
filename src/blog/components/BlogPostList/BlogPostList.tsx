import React from "react";

import { BlogPostListItem } from "../BlogPostListItem";
import { useBlogPosts } from "../../hooks";

export interface IBlogPostListProps {
  top?: number;
}

export const BlogPostList = ({ top }: IBlogPostListProps) => {
  const blogPosts = useBlogPosts(top);

  return (
    <>
      {blogPosts.map((blogPost) => (
        <BlogPostListItem key={blogPost.name} blogPost={blogPost} />
      ))}
    </>
  );
};

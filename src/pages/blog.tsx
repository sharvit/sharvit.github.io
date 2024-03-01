import React from "react";

import { Layout, Seo } from "../components";
import { BlogPostList } from "../blog";

import * as pageStyles from "./page.module.css";

export const Head = () => <Seo title="Latest blog posts" />;

export default function BlogPage() {
  return (
    <Layout className={pageStyles.page}>
      <h2 className={pageStyles.pageTitleCentered}>Latest Blogs Posts</h2>
      <BlogPostList />
    </Layout>
  );
}

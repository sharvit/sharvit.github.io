import React from 'react';

import { Section } from '../../../components';
import { BlogPostList } from '../BlogPostList';

import * as styles from './BlogSection.module.css';

export const BlogSection = () => (
  <Section
    title="Latest Blog Posts"
    footer="#all_blog_posts"
    link="/blog"
    className={styles.blogSection}
  >
    <BlogPostList top={5} />
  </Section>
);

import React from 'react';
import { Link } from 'gatsby';

import { IBlogPost } from '../../types';
import { CoverImage } from '../../../components/Layout/components/CoverImage';

import * as styles from './BlogPostListItem.module.css';

export interface IBlogPostListItemProps {
  blogPost: IBlogPost;
}

export function BlogPostListItem({
  blogPost: { title, date, url, excerpt, coverImage },
}: IBlogPostListItemProps) {
  return (
    <article className={styles.blogPostItem}>
      <header>
        {coverImage && (
          <Link to={url}>
            <CoverImage alt={title} image={coverImage} />
          </Link>
        )}
        <Link to={url}>
          <h3>{title}</h3>
        </Link>
        <time dateTime={date.toJSON()}>{date.toDateString()}</time>
      </header>
      <p>{excerpt}</p>
      <footer>
        <Link to={url}>#read_more</Link>
      </footer>
    </article>
  );
}

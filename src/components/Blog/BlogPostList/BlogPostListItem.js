import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'gatsby';
import Image from 'gatsby-image';

import styles from './BlogPostListItem.module.scss';

const BlogPostListItem = ({ title, coverImage, path, date, excerpt }) => (
  <article className={styles.article}>
    <div className="row">
      <div className="col-md-10 col-md-offset-1">
        <div className="text-center">
          <Link to={path}>
            {coverImage && (
              <Image
                fluid={coverImage}
                objectFit="cover"
                objectPosition="50% 50%"
                alt={title}
              />
            )}
            <h2 className={styles.title}>{title}</h2>
          </Link>
          <div className="title-uppercase">
            <time dateTime={date.toJSON()}>{date.toDateString()}</time>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-8 col-md-offset-2">
        <div className={styles.articleContent}>
          <p>{excerpt}</p>
          <Link
            to={path}
            className={classNames(
              'btn btn-simple btn-primary',
              styles.readMoreButton
            )}
          >
            READ MORE
          </Link>
        </div>
      </div>
    </div>
  </article>
);

BlogPostListItem.propTypes = {
  title: PropTypes.string,
  coverImage: PropTypes.object,
  path: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  excerpt: PropTypes.string,
};

BlogPostListItem.defaultProps = {
  title: '',
  coverImage: null,
  path: '',
  date: new Date(),
  excerpt: '',
};

export default BlogPostListItem;

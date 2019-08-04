import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'gatsby';

import styles from './BlogPostListItem.module.scss';

const BlogPostListItem = ({ title, path, date, excerpt }) => (
  <div className={styles.article}>
    <div className="row">
      <div className="col-md-10 col-md-offset-1">
        <div className="text-center">
          <Link to={path}>
            <h3 className={styles.title}>{title}</h3>
          </Link>
          <h6 className="title-uppercase">{date.toDateString()}</h6>
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
  </div>
);

BlogPostListItem.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  excerpt: PropTypes.string,
};

BlogPostListItem.defaultProps = {
  title: '',
  path: '',
  date: new Date(),
  excerpt: '',
};

export default BlogPostListItem;

import React from 'react';
import PropTypes from 'prop-types';

const BlogPost = ({ title, date, html }) => (
  <div className="section section-nude">
    <div className="container">
      <article className="post">
        <h1>{title}</h1>

        <div className="entry" dangerouslySetInnerHTML={{ __html: html }} />

        <div className="date">Written on {date.toDateString()}</div>
      </article>
    </div>
  </div>
);

BlogPost.propTypes = {
  title: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  html: PropTypes.string,
};

BlogPost.defaultProps = {
  title: '',
  date: new Date(),
  html: '',
};

export default BlogPost;

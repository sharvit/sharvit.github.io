import React from 'react';
import PropTypes from 'prop-types';
import { Disqus } from 'gatsby-plugin-disqus';

const BlogPost = ({ id, title, date, url, html }) => {
  const disqusConfig = {
    identifier: id,
    url,
    title,
  };
  return (
    <div className="section section-nude">
      <div className="container">
        <article className="post">
          <h1>{title}</h1>

          <div className="entry" dangerouslySetInnerHTML={{ __html: html }} />

          <div className="date">Written on {date.toDateString()}</div>

          <Disqus config={disqusConfig} />
        </article>
      </div>
    </div>
  );
};

BlogPost.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  url: PropTypes.string,
  html: PropTypes.string,
};

BlogPost.defaultProps = {
  id: '',
  title: '',
  date: new Date(),
  url: '',
  html: '',
};

export default BlogPost;

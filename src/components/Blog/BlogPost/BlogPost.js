import React from 'react';
import PropTypes from 'prop-types';
import { Disqus } from 'gatsby-plugin-disqus';
import Image from 'gatsby-image';

import ShareButtons from './ShareButtons';

const BlogPost = ({ id, title, coverImage, date, url, html }) => {
  const disqusConfig = {
    identifier: id,
    url,
    title,
  };
  return (
    <div className="section section-nude">
      <div className="container">
        <article className="post">
          {coverImage && (
            <Image
              fluid={coverImage}
              objectFit="cover"
              objectPosition="50% 50%"
              alt={title}
            />
          )}
          <h1>{title}</h1>
          <div className="date">
            Written on{' '}
            <time dateTime={date.toJSON()}>{date.toDateString()}</time>
          </div>
          <br />
          <br />
          <p className="entry" dangerouslySetInnerHTML={{ __html: html }} />
          <br />
          <br />
          <ShareButtons url={url} />
          <br />
          <br />
          <br />
          <br />
          <Disqus config={disqusConfig} />
        </article>
      </div>
    </div>
  );
};

BlogPost.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  coverImage: PropTypes.object,
  date: PropTypes.instanceOf(Date),
  url: PropTypes.string,
  html: PropTypes.string,
};

BlogPost.defaultProps = {
  id: '',
  title: '',
  coverImage: null,
  date: new Date(),
  url: '',
  html: '',
};

export default BlogPost;

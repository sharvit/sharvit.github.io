import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import BlogPost from '../components/Blog/BlogPost';

const PostTemplate = ({
  pageContext: { name, date, postPath, postUrl },
  data: {
    file: {
      childMarkdownRemark: {
        html,
        excerpt,
        frontmatter: { title },
      },
    },
  },
}) => (
  <Layout
    breadcrumbs={[{ title: 'Blog', path: '/blog' }, { title, path: postPath }]}
  >
    <SEO title={title} description={excerpt} />
    <BlogPost
      id={name}
      title={title}
      date={new Date(date)}
      url={postUrl}
      html={html}
    />
  </Layout>
);

PostTemplate.propTypes = {
  pageContext: PropTypes.shape({
    name: PropTypes.string,
    date: PropTypes.string,
    postPath: PropTypes.string,
    postUrl: PropTypes.string,
  }).isRequired,
  data: PropTypes.shape({
    file: PropTypes.shape({
      childMarkdownRemark: PropTypes.shape({
        html: PropTypes.string,
        excerpt: PropTypes.string,
        frontmatter: PropTypes.shape({
          title: PropTypes.string,
        }),
      }),
    }),
  }).isRequired,
};

export default PostTemplate;

export const pageQuery = graphql`
  query($name: String!) {
    file(sourceInstanceName: { eq: "posts" }, name: { eq: $name }) {
      childMarkdownRemark {
        html
        excerpt
        frontmatter {
          title
        }
      }
    }
  }
`;

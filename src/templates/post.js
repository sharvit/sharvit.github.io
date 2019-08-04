import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import BlogPost from '../components/Blog/BlogPost';

const PostTemplate = ({
  pageContext: { date },
  data: {
    file: {
      childMarkdownRemark: {
        html,
        frontmatter: { title },
      },
    },
  },
}) => (
  <Layout>
    <SEO title="About" />
    <BlogPost title={title} date={new Date(date)} html={html} />
  </Layout>
);

PostTemplate.propTypes = {
  pageContext: PropTypes.shape({
    date: PropTypes.string,
  }).isRequired,
  data: PropTypes.shape({
    file: PropTypes.shape({
      childMarkdownRemark: PropTypes.shape({
        html: PropTypes.string,
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
        frontmatter {
          title
        }
      }
    }
  }
`;

import { useStaticQuery, graphql } from 'gatsby';

export const getAboutHTML = () =>
  useStaticQuery(graphql`
    query AboutMarkdown {
      markdownRemark(fileAbsolutePath: { regex: "//content/about.md/" }) {
        html
      }
    }
  `).markdownRemark.html;

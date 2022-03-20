import { useStaticQuery, graphql } from 'gatsby';

const useAboutHTML = () =>
  useStaticQuery(graphql`
    query AboutMarkdown {
      file(sourceInstanceName: { eq: "bio" }, name: { eq: "about" }) {
        childMarkdownRemark {
          html
        }
      }
    }
  `).file.childMarkdownRemark.html;

export default useAboutHTML;

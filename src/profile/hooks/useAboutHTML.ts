import { useStaticQuery, graphql } from 'gatsby';

// eslint-disable-next-line no-undef
export type AboutMarkdownQuery = Queries.AboutMarkdownQuery;

export const useAboutHTML = (): string =>
  useStaticQuery<AboutMarkdownQuery>(graphql`
    query AboutMarkdown {
      file(sourceInstanceName: { eq: "bio" }, name: { eq: "about" }) {
        childMarkdownRemark {
          html
        }
      }
    }
  `).file?.childMarkdownRemark?.html || '';

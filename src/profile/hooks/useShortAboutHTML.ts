import { useStaticQuery, graphql } from 'gatsby';

// eslint-disable-next-line no-undef
export type ShortAboutMarkdownQuery = Queries.ShortAboutMarkdownQuery;

export const useShortAboutHTML = (): string =>
  useStaticQuery<ShortAboutMarkdownQuery>(graphql`
    query ShortAboutMarkdown {
      file(sourceInstanceName: { eq: "bio" }, name: { eq: "short-bio" }) {
        childMarkdownRemark {
          html
        }
      }
    }
  `).file?.childMarkdownRemark?.html || '';

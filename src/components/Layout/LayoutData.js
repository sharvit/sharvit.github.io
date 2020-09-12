import { useStaticQuery, graphql } from 'gatsby';

export const useSiteTitle = () =>
  useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `).site.siteMetadata.title;

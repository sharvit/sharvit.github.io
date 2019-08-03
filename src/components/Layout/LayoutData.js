import { useStaticQuery, graphql } from 'gatsby';

export const getSiteTitle = () =>
  useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `).site.siteMetadata.title;

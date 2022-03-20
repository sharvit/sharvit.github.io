import { useStaticQuery, graphql } from 'gatsby';

const useSiteTitle = () =>
  useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `).site.siteMetadata.title;

export default useSiteTitle;

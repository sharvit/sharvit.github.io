import { useStaticQuery, graphql } from 'gatsby';

export const getProfileData = () =>
  useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author {
            avatar
          }
        }
      }
    }
  `).site.siteMetadata;

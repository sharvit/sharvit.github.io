import { useStaticQuery, graphql } from 'gatsby';

export const getSocialLinks = () =>
  useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            socialLinks {
              id
              link
              buttonClassName
              iconClassName
            }
          }
        }
      }
    `
  ).site.siteMetadata.socialLinks;

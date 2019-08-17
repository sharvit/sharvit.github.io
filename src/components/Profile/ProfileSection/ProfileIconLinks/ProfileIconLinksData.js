import { useStaticQuery, graphql } from 'gatsby';

export const getSocialLinks = () =>
  useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            socialLinks {
              id
              label
              link
              pdfLink
              buttonClassName
              iconClassName
            }
          }
        }
      }
    `
  ).site.siteMetadata.socialLinks;

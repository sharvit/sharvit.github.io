import { useStaticQuery, graphql } from 'gatsby';

const useSocialLinks = () =>
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

export default useSocialLinks;

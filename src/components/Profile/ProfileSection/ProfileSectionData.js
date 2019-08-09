import { useStaticQuery, graphql } from 'gatsby';

export const getProfileData = () => {
  const {
    site: {
      siteMetadata: {
        title,
        description,
        author: { avatar },
      },
    },
    file: {
      childMarkdownRemark: { html: bio },
    },
  } = useStaticQuery(graphql`
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
      file(sourceInstanceName: { eq: "bio" }, name: { eq: "short-bio" }) {
        childMarkdownRemark {
          html
        }
      }
    }
  `);

  return { title, description, avatar, bio };
};

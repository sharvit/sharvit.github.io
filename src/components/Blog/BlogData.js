import { useStaticQuery, graphql } from 'gatsby';

export const useBlogPosts = () =>
  useStaticQuery(
    graphql`
      {
        allFile(
          filter: { sourceInstanceName: { eq: "posts" } }
          sort: { order: DESC, fields: name }
          limit: 1000
        ) {
          edges {
            node {
              name
              childMarkdownRemark {
                excerpt
                frontmatter {
                  title
                  coverImage {
                    childImageSharp {
                      fluid(maxHeight: 500, maxWidth: 1200) {
                        base64
                        tracedSVG
                        aspectRatio
                        src
                        srcSet
                        srcWebp
                        srcSetWebp
                        sizes
                        originalImg
                        originalName
                        presentationWidth
                        presentationHeight
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  ).allFile.edges.map(fileToBlogPost);

export const fileToBlogPost = ({
  node: {
    name,
    childMarkdownRemark: {
      excerpt,
      frontmatter: { title, coverImage: coverImageFile },
    },
  },
}) => formatBlogPost({ name, title, excerpt, coverImageFile });

export const formatBlogPost = ({ name, title, excerpt, coverImageFile }) => {
  const [year, month, day] = name.split('-');
  const date = new Date(`${year}-${month}-${day}`);

  const coverImage = coverImageFile && coverImageFile.childImageSharp.fluid;

  return {
    title,
    date,
    excerpt,
    coverImage,
    path: `/blog/${name}`,
  };
};

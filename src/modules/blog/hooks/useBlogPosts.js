import { useStaticQuery, graphql } from 'gatsby';

const useBlogPosts = () =>
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
                      gatsbyImageData(layout: FULL_WIDTH)
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  ).allFile.edges.map(
    ({
      node: {
        name,
        childMarkdownRemark: {
          excerpt,
          frontmatter: { title, coverImage: coverImageFile },
        },
      },
    }) => formatBlogPost({ name, title, excerpt, coverImageFile })
  );

const formatBlogPost = ({ name, title, excerpt, coverImageFile }) => {
  const [year, month, day] = name.split('-');
  const date = new Date(`${year}-${month}-${day}`);

  const coverImage =
    coverImageFile && coverImageFile.childImageSharp.gatsbyImageData;

  return {
    title,
    date,
    excerpt,
    coverImage,
    path: `/blog/${name}`,
  };
};

export default useBlogPosts;

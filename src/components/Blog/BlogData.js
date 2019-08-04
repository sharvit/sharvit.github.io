import { useStaticQuery, graphql } from 'gatsby';

export const getBlogPosts = () =>
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
      frontmatter: { title },
    },
  },
}) => formatBlogPost({ name, title, excerpt });

export const formatBlogPost = ({ name, title, excerpt }) => {
  const [year, month, day, ...nameWithoutDate] = name.split('-');
  const date = new Date(`${year}-${month}-${day}`);

  return {
    title,
    date,
    excerpt,
    path: `/blog/${nameWithoutDate.join('-')}`,
  };
};

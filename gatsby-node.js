/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
const siteMetadata = require('./content/meta/siteMetadata');

const getPostFiles = async (graphql) => {
  const result = await graphql(`
    query {
      allFile(
        filter: { sourceInstanceName: { eq: "posts" } }
        sort: { order: DESC, fields: name }
        limit: 10000
      ) {
        edges {
          node {
            name
            childMarkdownRemark {
              html
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
  `);

  if (result.errors) {
    console.log(result.errors); // eslint-disable-line no-console
    throw new Error('Things broke, see console output above');
  }

  return result.data.allFile;
};

const mapPostFileToPostData = (postFileEdge, graphql) => {
  const {
    node: { name, childMarkdownRemark },
  } = postFileEdge;

  const [year, month, day] = name.split('-');
  const date = `${year}-${month}-${day}`;

  const postPath = `/blog/${name}`;
  const postUrl = `${siteMetadata.siteUrl}${postPath}`;

  const {
    html,
    excerpt,
    frontmatter: { title, coverImage: coverImageFile },
  } = childMarkdownRemark;

  const coverImage = coverImageFile && coverImageFile.childImageSharp.fluid;

  return { name, date, postPath, postUrl, html, excerpt, title, coverImage };
};

const createPostsPages = async (createPage, graphql) => {
  const component = path.resolve(__dirname, 'src/templates/post.js');

  const postFiles = await getPostFiles(graphql);

  // eslint-disable-next-line no-unused-vars
  for (const edge of postFiles.edges) {
    const postData = mapPostFileToPostData(edge, graphql);

    createPage({
      component,
      path: postData.postPath,
      context: postData,
    });
  }
};

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  await createPostsPages(createPage, graphql);
};

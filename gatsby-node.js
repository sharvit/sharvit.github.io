/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
const siteMetadata = require('./content/meta/siteMetadata');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const component = path.resolve(`src/templates/post.js`);

  const result = await graphql(`
    {
      allFile(
        filter: { sourceInstanceName: { eq: "posts" } }
        sort: { order: DESC, fields: name }
        limit: 10000
      ) {
        edges {
          node {
            name
          }
        }
      }
    }
  `);

  if (result.errors) {
    console.log(result.errors); // eslint-disable-line no-console
    throw new Error('Things broke, see console output above');
  }

  result.data.allFile.edges.forEach(({ node: { name } }) => {
    // eslint-disable-next-line no-unused-vars
    const [year, month, day, ...title] = name.split('-');
    const date = `${year}-${month}-${day}`;

    const postPath = `/blog/${title.join('-')}`;
    const postUrl = `${siteMetadata.siteUrl}${postPath}`;

    createPage({
      component,
      path: postPath,
      context: { name, date, postPath, postUrl },
    });
  });
};

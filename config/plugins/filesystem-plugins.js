const path = require('path');

const root = path.resolve(__dirname, '../../');

module.exports = [
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${root}/content/meta`,
      name: 'meta',
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${root}/content/bio`,
      name: 'bio',
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${root}/content/posts`,
      name: 'posts',
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${root}/src/images`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `post-images`,
      path: `${root}/content/post-images`,
    },
  },
];

const siteMetadata = require('../../content/meta/siteMetadata');

module.exports = [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        'gatsby-plugin-sharp',
        'gatsby-remark-images',
        {
          resolve: '@raae/gatsby-remark-oembed',
          options: {
            usePrefix: ['oembed', 'video'],
          },
        },
        'gatsby-remark-responsive-iframe',
        'gatsby-remark-prismjs',
      ],
    },
  },
  {
    resolve: `gatsby-plugin-disqus`,
    options: {
      shortname: siteMetadata.author.disqus,
    },
  },
];

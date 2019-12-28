const siteMetadata = require('./content/meta/siteMetadata');
const feedOptions = require('./config/feedOptions');

module.exports = {
  siteMetadata,
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-72542809-1',
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        useResolveUrlLoader: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/meta`,
        name: 'meta',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/bio`,
        name: 'bio',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/posts`,
        name: 'posts',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `post-images`,
        path: `${__dirname}/content/post-images`,
      },
    },
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
          'gatsby-remark-prismjs',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: siteMetadata.author.disqus,
      },
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        id: 252668,
        sv: 5,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: feedOptions,
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Avi Sharvit`,
        short_name: `sharvit`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};

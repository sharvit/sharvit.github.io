const filesystemPlugins = require('./filesystem-plugins');
const imagePlugins = require('./image-plugins');
const markdownPlugins = require('./markdown-plugins');
const rssPlugins = require('./rss-plugins');

module.exports = [
  ...filesystemPlugins,
  ...imagePlugins,
  ...markdownPlugins,
  ...rssPlugins,
  'gatsby-plugin-sitemap',
  {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      trackingId: 'UA-72542809-1',
    },
  },
  {
    resolve: 'gatsby-plugin-sass',
    options: {
      useResolveUrlLoader: true,
    },
  },
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: 'Avi Sharvit',
      short_name: 'sharvit',
      start_url: '/',
      background_color: '#663399',
      theme_color: '#663399',
      display: 'minimal-ui',
      icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
    },
  },
];

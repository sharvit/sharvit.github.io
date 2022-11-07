import type { PluginRef } from 'gatsby';

import filesystemPlugins from './filesystem-plugins';
import imagePlugins from './image-plugins';
import markdownPlugins from './markdown-plugins';

const plugins: PluginRef[] = [
  ...filesystemPlugins,
  ...imagePlugins,
  ...markdownPlugins,
  {
    resolve: `gatsby-transformer-yaml`,
    options: {
      typeName: `Yaml`,
    },
  },
  'gatsby-plugin-postcss',
  'gatsby-plugin-sitemap',
  {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      trackingId: 'UA-72542809-1',
    },
  },
];

export default plugins;

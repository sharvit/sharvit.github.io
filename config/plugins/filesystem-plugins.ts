import path from 'path';
import type { PluginRef } from 'gatsby';

const root = path.resolve(__dirname, '../../');

const plugins: PluginRef[] = [
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

export default plugins;

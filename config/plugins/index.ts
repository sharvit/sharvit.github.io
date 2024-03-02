import type { PluginRef } from "gatsby";

import filesystemPlugins from "./filesystem-plugins";
import imagePlugins from "./image-plugins";
import markdownPlugins from "./markdown-plugins";

const plugins: PluginRef[] = [
  ...filesystemPlugins,
  ...imagePlugins,
  ...markdownPlugins,
  {
    resolve: "gatsby-plugin-manifest",
    options: {
      name: "Avi Sharvit",
      short_name: "Avi Sharvit",
      start_url: "/",
      background_color: "#f8f9fa",
      theme_color: "#50a14f",
      display: "standalone",
      icon: "src/images/icon.png",
    },
  },
  {
    resolve: `gatsby-transformer-yaml`,
    options: {
      typeName: `Yaml`,
    },
  },
  "gatsby-plugin-postcss",
  "gatsby-plugin-sitemap",
  {
    resolve: "gatsby-plugin-google-analytics",
    options: {
      trackingId: "UA-72542809-1",
    },
  },
];

export default plugins;

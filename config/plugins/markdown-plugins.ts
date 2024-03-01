import type { PluginRef } from "gatsby";

const plugins: PluginRef[] = [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        "gatsby-plugin-sharp",
        "gatsby-remark-images",
        "gatsby-remark-responsive-iframe",
        {
          resolve: "@raae/gatsby-remark-oembed",
          options: {
            usePrefix: ["oembed", "video"],
          },
        },
        {
          resolve: "gatsby-remark-prismjs",
          options: {
            showLineNumbers: true,
          },
        },
      ],
    },
  },
];

export default plugins;

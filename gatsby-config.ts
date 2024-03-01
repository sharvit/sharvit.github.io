import type { GatsbyConfig } from "gatsby";

import { getAuthorProfile } from "./content/bio/getAuthorProfile";
import plugins from "./config/plugins";

const profile = getAuthorProfile();

const config: GatsbyConfig = {
  graphqlTypegen: true,
  plugins,
  siteMetadata: {
    title: profile.name,
    description: profile.title,
    siteUrl: profile.website,
  },
};

export default config;

import React from "react";

import { Layout, Seo } from "../components";
import { GithubCardsGrid } from "../open-source";

import * as pageStyles from "./page.module.css";

export const Head = () => <Seo title="Open source projects" />;

export default function OpenSourcePage() {
  return (
    <Layout className={pageStyles.pageFluid}>
      <h2 className={pageStyles.pageTitleCentered}>Open Source Projects</h2>
      <GithubCardsGrid className={pageStyles.fluidSection} />
    </Layout>
  );
}

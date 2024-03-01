import React from "react";

import { Section } from "../../../components";
import { GithubCardsGrid } from "../GithubCardsGrid";

import * as styles from "./OpenSourceSection.module.css";

export const OpenSourceSection = () => (
  <Section
    title="Top Open Source Projects"
    footer="#all_open_source_projects"
    link="/open-source"
    className={styles.openSourceSection}
  >
    <GithubCardsGrid top={6} />
  </Section>
);

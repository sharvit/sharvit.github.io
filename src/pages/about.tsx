import React from "react";
import classNames from "classnames";

import { Layout, Seo } from "../components";
import { ProfileSection, BioSection, useAboutCoverImage } from "../profile";

import * as pageStyles from "./page.module.css";

export const Head = () => <Seo title="About" />;

export default function AboutPage() {
  const coverImage = useAboutCoverImage();

  return (
    <Layout
      transparent
      className={classNames(pageStyles.pageFluid, pageStyles.pageAbout)}
      coverImage={
        coverImage && {
          image: coverImage,
          alt: "Avi Sharvit",
        }
      }
    >
      <ProfileSection
        footer="#download_resume_pdf"
        link="/pdf/avi-sharvit-resume.pdf"
        linkExternal
      />
      <BioSection />
    </Layout>
  );
}

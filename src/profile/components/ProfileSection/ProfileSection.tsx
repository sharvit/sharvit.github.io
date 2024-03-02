import React from "react";

import { Section } from "../../../components";
import { SocialLinks } from "../SocialLinks";
import { useAuthorProfile, useShortAboutHTML } from "../../hooks";

import * as styles from "./ProfileSection.module.css";

export interface IPorfileSectionProps {
  link?: string;
  linkExternal?: boolean;
  footer?: string;
}

export const ProfileSection = ({
  link = "/about",
  linkExternal = false,
  footer = "#full_bio",
}: IPorfileSectionProps) => {
  const profile = useAuthorProfile();
  const aboutHTML = useShortAboutHTML();

  const [firstName, lastName] = profile.name.split(" ");

  return (
    <Section
      className={styles.profileSection}
      link={link}
      linkExternal={linkExternal}
      footer={footer}
    >
      <img className={styles.avatar} src={profile.avatar} alt={profile.name} />

      <h1>
        {firstName}
        <br />
        {lastName}
      </h1>

      <h2>{profile.title}</h2>

      <SocialLinks />
      <div
        className={styles.shortBio}
        dangerouslySetInnerHTML={{ __html: aboutHTML }}
      />
    </Section>
  );
};

import { useMemo } from "react";
import { Twitter as TwitterIcon, Mail as MailIcon } from "react-feather";

import { GithubIcon, StackOverflowIcon } from "../../../components";
import { SocialLinkType } from "./types";

import * as styles from "./SocialLinks.module.css";

export const useSocialLinkIcon = (type: SocialLinkType) => {
  return useMemo(() => {
    switch (type) {
      case "github":
        return GithubIcon;
      case "twitter":
        return TwitterIcon;
      case "stackoverflow":
        return StackOverflowIcon;
      case "email":
        return MailIcon;
    }
  }, [type]);
};

export const useSocialLinkClassName = (type: SocialLinkType) => {
  return useMemo(() => {
    switch (type) {
      case "github":
        return styles.githubLink;
      case "twitter":
        return styles.twitterLink;
      case "stackoverflow":
        return styles.stackOverflowLink;
      case "email":
        return styles.emailLink;
    }
  }, [type]);
};

import React, { useMemo } from "react";
import classNames from "classnames";

import { GithubCard } from "../GithubCard";
import { useOpenSourceProjects } from "../../hooks";

import * as styles from "./GithubCardsGrid.module.css";

export interface IGithubCardsGridProps {
  top?: number;
  className?: string;
}

export const GithubCardsGrid = ({ top, className }: IGithubCardsGridProps) => {
  const { openSourceProjects, openSourceProjectsIds } =
    useOpenSourceProjects(top);

  const githubCards = useMemo(
    () =>
      openSourceProjectsIds.map((repositoryId, index) => {
        const repository = openSourceProjects[index];

        return (
          <GithubCard
            key={repositoryId}
            repositoryId={repositoryId}
            repository={repository}
          />
        );
      }),
    [openSourceProjectsIds, openSourceProjects],
  );

  return (
    <div className={classNames(styles.githubCards, className)}>
      {githubCards}
    </div>
  );
};

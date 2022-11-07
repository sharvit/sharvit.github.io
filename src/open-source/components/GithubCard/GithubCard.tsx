import React, { useMemo } from 'react';
import Skeleton from 'react-loading-skeleton';

import { IGithubRepository } from '../../types';
import { TitleIcon, LanguageIcon, StarIcon, ForksIcon } from './components';

import * as styles from './GithubCard.module.css';

export interface IGithubCardProps {
  repositoryId: string;
  repository?: IGithubRepository;
}

export const GithubCard = ({ repositoryId, repository }: IGithubCardProps) => {
  const [repositoryOwner, repositoryName] = useMemo(
    () => repositoryId.split('/'),
    [repositoryId]
  );

  const repositoryUrl = useMemo(
    () => `https://github.com/${repositoryOwner}/${repositoryName}`,
    [repositoryOwner, repositoryName]
  );

  const isLoading = !repository;

  return (
    <article className={styles.card}>
      <div className={styles.body}>
        <h4>
          <TitleIcon />
          <a target="_blank" rel="noopener noreferrer" href={repositoryUrl}>
            <span className={styles.owner}>{repositoryOwner}</span>/
            <span className={styles.repositoryName}>{repositoryName}</span>
          </a>
        </h4>
        <p>{isLoading ? <Skeleton count={2} /> : repository.description}</p>
      </div>
      {isLoading ? (
        <footer className={styles.skeleton}>
          <Skeleton />
        </footer>
      ) : (
        <footer>
          <span className={styles.footerItem}>
            <LanguageIcon
              className={styles.languageIcon}
              programingLanguage={repository.language}
            />{' '}
            <span itemProp="programmingLanguage">{repository.language}</span>
          </span>
          <a
            href={`${repository.htmlUrl}/stargazers`}
            className={styles.footerItem}
            target="_blank"
            rel="noopener noreferrer"
          >
            <StarIcon /> {repository.stargazersCount}
          </a>
          <a
            href={`${repository.htmlUrl}/network/members`}
            className={styles.footerItem}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ForksIcon /> {repository.forksCount}
          </a>
        </footer>
      )}
    </article>
  );
};

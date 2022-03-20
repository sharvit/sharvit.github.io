import React from 'react';
import classNames from 'classnames';

import { useOpenSourceProjects } from '../../hooks';
import OpenSourceCard from '../OpenSourceCard';

import * as styles from './AllOpenSourceSection.module.scss';

const AllOpenSourceSection = () => {
  const { openSourceProjects, isLoading } = useOpenSourceProjects();

  return (
    <main className={classNames('section section-nude', styles.container)}>
      <div className="container">
        <h1>Open Source Projects</h1>

        <div className="row open-source">
          {isLoading
            ? [...Array(6)].map((_, i) => (
                <div className="col-md-4" key={i}>
                  <OpenSourceCard isLoading />
                </div>
              ))
            : openSourceProjects.map((repository) => (
                <div className="col-md-4" key={repository.name}>
                  <OpenSourceCard {...repository} />
                </div>
              ))}
        </div>
      </div>
    </main>
  );
};

export default AllOpenSourceSection;

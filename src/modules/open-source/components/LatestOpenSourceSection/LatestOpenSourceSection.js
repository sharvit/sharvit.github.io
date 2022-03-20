import React from 'react';
import classNames from 'classnames';
import { Link } from 'gatsby';

import OpenSourceCard from '../OpenSourceCard';
import { useOpenSourceProjects } from '../../hooks';

import * as styles from './LatestOpenSourceSection.module.scss';

const LatestOpenSourceSection = () => {
  const { openSourceProjects, isLoading } = useOpenSourceProjects(6);

  return (
    <section
      className={classNames(
        'section posts-section section-light-brown',
        styles.container
      )}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-md-offset-1">
            <div className="text-center">
              <h2>Top Open Source Projects</h2>
            </div>
          </div>
        </div>

        <div className="row open-source open-source-section">
          {isLoading
            ? [...Array(6)].map((_, i) => (
                <div className="col-md-4" key={i}>
                  <OpenSourceCard isLoading />
                </div>
              ))
            : openSourceProjects.map((repository, i) => (
                <div className="col-md-4" key={i}>
                  <OpenSourceCard {...repository} />
                </div>
              ))}
        </div>

        <div className="row">
          <div className="col-md-10 col-md-offset-1">
            <div className="text-center">
              <Link
                to="/open-source"
                className="btn btn-default btn-fill btn-lg"
              >
                All Open Source Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestOpenSourceSection;

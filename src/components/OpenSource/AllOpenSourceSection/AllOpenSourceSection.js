import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import OpenSourceCard from '../OpenSourceCard';

import styles from './AllOpenSourceSection.module.scss';

const AllOpenSourceSection = ({ repositories, isLoading }) => (
  <main className={classNames('section section-nude', styles.container)}>
    <div className="container">
      <h1>Open Source Projects</h1>

      <div className="row open-source">
        {isLoading
          ? [...Array(6)].map((i) => (
              <div className="col-md-4" key={i}>
                <OpenSourceCard isLoading />
              </div>
            ))
          : repositories.map((repository) => (
              <div className="col-md-4" key={repository.name}>
                <OpenSourceCard {...repository} />
              </div>
            ))}
      </div>
    </div>
  </main>
);

AllOpenSourceSection.propTypes = {
  isLoading: PropTypes.bool,
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      ...OpenSourceCard.propTypes,
    })
  ),
};

AllOpenSourceSection.defaultProps = {
  isLoading: false,
  repositories: [],
};

export default AllOpenSourceSection;

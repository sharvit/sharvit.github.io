import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import OpenSourceCard from '../OpenSourceCard';

import styles from './AllOpenSourceSection.module.scss';

const AllOpenSourceSection = ({ repositories }) => (
  <main className={classNames('section section-nude', styles.container)}>
    <div className="container">
      <h1>Latest Open Source Projects</h1>

      <div className="row open-source">
        {repositories.map((repository) => (
          <div className="col-md-4" key={repository.name}>
            <OpenSourceCard {...repository} />
          </div>
        ))}
      </div>
    </div>
  </main>
);

AllOpenSourceSection.propTypes = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      ...OpenSourceCard.propTypes,
    })
  ),
};

AllOpenSourceSection.defaultProps = {
  repositories: [],
};

export default AllOpenSourceSection;

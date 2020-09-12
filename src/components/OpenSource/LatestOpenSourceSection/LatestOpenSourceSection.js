import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'gatsby';

import OpenSourceCard from '../OpenSourceCard';

import styles from './LatestOpenSourceSection.module.scss';

const LatestOpenSourceSection = ({ repositories }) => (
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
            <h2>Latest Open Source Projects</h2>
          </div>
        </div>
      </div>

      <div className="row open-source open-source-section">
        {repositories.map((repository) => (
          <div className="col-md-4" key={repository.name}>
            <OpenSourceCard {...repository} />
          </div>
        ))}
      </div>

      <div className="row">
        <div className="col-md-10 col-md-offset-1">
          <div className="text-center">
            <Link to="/open-source" className="btn btn-default btn-fill btn-lg">
              All Open Source Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

LatestOpenSourceSection.propTypes = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      ...OpenSourceCard.propTypes,
    })
  ),
};

LatestOpenSourceSection.defaultProps = {
  repositories: [],
};

export default LatestOpenSourceSection;

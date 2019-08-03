import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import OpenSourceCard from '../OpenSourceCard';

import './LatestOpenSourceSection.scss';

const LatestOpenSourceSection = ({ repositories }) => (
  <div className="section posts-section open-source-section section-light-brown">
    <div className="container">
      <div className="row">
        <div className="col-md-10 col-md-offset-1">
          <div className="text-center">
            <h2>Latest Open Source Projects</h2>
          </div>
        </div>
      </div>

      <div className="row open-source open-source-section">
        {repositories.map(repository => (
          <div className="col-md-4" key={repository.name}>
            <OpenSourceCard {...repository} />
          </div>
        ))}
      </div>

      <div className="row">
        <div className="col-md-10 col-md-offset-1">
          <div className="text-center">
            <Link to="/open-source" className="btn btn-default">
              MORE
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
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

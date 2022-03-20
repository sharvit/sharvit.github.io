import React from 'react';
import PropTypes from 'prop-types';

import {
  OpenSourceCardContainer,
  OpenSourceCardContent,
  OpenSourceCardFooter,
  OpenSourceCardSkelaton,
} from './components';

const OpenSourceCard = ({
  owner,
  name,
  fullName,
  description,
  language,
  stargazersCount,
  forksCount,
  isLoading,
}) =>
  isLoading ? (
    <OpenSourceCardSkelaton />
  ) : (
    <OpenSourceCardContainer>
      <OpenSourceCardContent
        owner={owner}
        name={name}
        description={description}
      />
      <OpenSourceCardFooter
        language={language}
        fullName={fullName}
        stargazersCount={stargazersCount}
        forksCount={forksCount}
      />
    </OpenSourceCardContainer>
  );

OpenSourceCard.propTypes = {
  owner: PropTypes.string,
  name: PropTypes.string,
  fullName: PropTypes.string,
  description: PropTypes.string,
  language: PropTypes.string,
  stargazersCount: PropTypes.number,
  forksCount: PropTypes.number,
  isLoading: PropTypes.bool,
};

OpenSourceCard.defaultProps = {
  owner: '',
  name: '',
  fullName: '',
  description: '',
  language: '',
  stargazersCount: 0,
  forksCount: 0,
  isLoading: false,
};

export default OpenSourceCard;

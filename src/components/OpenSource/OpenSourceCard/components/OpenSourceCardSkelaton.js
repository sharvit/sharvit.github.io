import React from 'react';
import Skeleton from 'react-loading-skeleton';

import OpenSourceCardContainer from './OpenSourceCardContainer';

const OpenSourceCardSkelaton = () => (
  <OpenSourceCardContainer>
    <Skeleton width={200} />
    <Skeleton count={3} />
  </OpenSourceCardContainer>
);

export default OpenSourceCardSkelaton;

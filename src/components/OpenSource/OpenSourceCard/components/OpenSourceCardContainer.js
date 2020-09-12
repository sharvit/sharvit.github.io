import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from '../OpenSourceCard.module.scss';

const OpenSourceCardContainer = ({ children, className, ...props }) => (
  <div className={classNames('card', styles.container, className)}>
    {children}
  </div>
);

OpenSourceCardContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

OpenSourceCardContainer.defaultProps = {
  children: null,
  className: null,
};

export default OpenSourceCardContainer;

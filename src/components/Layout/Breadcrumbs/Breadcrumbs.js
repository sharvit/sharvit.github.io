import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import BreadcrumbItem from './BreadcrumbItem';
import styles from './Breadcrumbs.module.scss';

const Breadcrumbs = ({ items }) => (
  <nav className={classNames(styles.breadcrumbs, 'breadcrumbs')}>
    <ol className="breadcrumb" style={{ margin: 0 }}>
      {items.map((item) => (
        <BreadcrumbItem key={item.path} {...item} />
      ))}
    </ol>
  </nav>
);

Breadcrumbs.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      ...Breadcrumbs.propTypes,
    })
  ).isRequired,
};

export default Breadcrumbs;

import React from 'react';
import PropTypes from 'prop-types';

import BreadcrumbItem from './BreadcrumbItem';

const Breadcrumbs = ({ items }) => (
  <nav className="breadcrumbs">
    <ol className="breadcrumb" style={{ margin: 0 }}>
      {items.map(item => (
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

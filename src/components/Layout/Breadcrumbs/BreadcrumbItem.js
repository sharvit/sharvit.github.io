import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const BreadcrumbItem = ({ title, path }) => (
  <li>
    <Link to={path}>{title}</Link>
  </li>
);

BreadcrumbItem.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string,
};

BreadcrumbItem.defaultProps = {
  title: '',
  path: '',
};

export default BreadcrumbItem;

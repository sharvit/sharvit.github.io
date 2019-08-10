import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const BreadcrumbItem = ({ title, path }) => (
  <li itemScope itemType="http://data-vocabulary.org/Breadcrumb">
    <Link to={path} itemProp="url">
      <span itemProp="title">{title}</span>
    </Link>
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

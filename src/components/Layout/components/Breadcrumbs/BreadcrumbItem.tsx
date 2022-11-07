import React from 'react';
import { Link } from 'gatsby';

export interface IBreadcrumbItem {
  title: string;
  path: string;
}

export const BreadcrumbItem = ({ title, path }: IBreadcrumbItem) => (
  <li itemScope itemType="http://data-vocabulary.org/Breadcrumb">
    <Link to={path} itemProp="url">
      <span itemProp="title">{title}</span>
    </Link>
  </li>
);

import React from 'react';

import { IBreadcrumbItem, BreadcrumbItem } from './BreadcrumbItem';
import * as styles from './Breadcrumbs.module.css';

export interface IBreadcrumbs {
  items: IBreadcrumbItem[];
}

export const Breadcrumbs = ({ items }: IBreadcrumbs) => (
  <nav className={styles.breadcrumbs}>
    <ol style={{ margin: 0 }}>
      {items.map((item) => (
        <BreadcrumbItem key={item.path} {...item} />
      ))}
    </ol>
  </nav>
);

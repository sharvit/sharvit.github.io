import React, { useState, ReactNode, useCallback } from 'react';
import classNames from 'classnames';

import { LayoutContext, DEFAULT_LAYOUT_CONTEXT } from './LayoutContext';
import {
  Navbar,
  Breadcrumbs,
  IBreadcrumbItem,
  CoverImage,
  CoverImageProps,
} from './components';
import { useAuthorProfile } from '../../profile';

import * as styles from './Layout.module.css';

export interface ILayout {
  coverImage?: CoverImageProps;
  breadcrumbs?: IBreadcrumbItem[];
  transparent?: boolean;
  className?: string;
  children?: ReactNode;
}

export const Layout = ({
  coverImage,
  breadcrumbs,
  transparent,
  className,
  children,
}: ILayout) => {
  const author = useAuthorProfile();

  // display/hide navigation menu
  const [displayNavigation, setDisplayNavigation] = useState(
    DEFAULT_LAYOUT_CONTEXT.navigation.displayNavigation
  );

  // toggle navigation menu
  const toggleNavigation = useCallback(
    () => setDisplayNavigation(!displayNavigation),
    [setDisplayNavigation, displayNavigation]
  );

  return (
    <LayoutContext.Provider
      value={{ navigation: { displayNavigation, toggleNavigation } }}
    >
      <header
        className={classNames(styles.layoutHeader, {
          [styles.transparent]: transparent,
        })}
      >
        <Navbar transparent={transparent} />
        {coverImage && (
          <CoverImage
            {...coverImage}
            className={classNames(styles.coverImage, coverImage.className)}
          />
        )}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <Breadcrumbs
            items={[{ title: author.name, path: '/' }, ...breadcrumbs]}
          />
        )}
      </header>
      <main className={className}>{children}</main>
    </LayoutContext.Provider>
  );
};

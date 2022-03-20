import React, { useState } from 'react';
import PropTypes from 'prop-types';

import LayoutContext from './LayoutContext';
import { Navbar, Breadcrumbs } from './components';
import { useSiteTitle } from './hooks';

import '../../stylesheet/main.scss';

const Layout = ({ transparent, breadcrumbs, children }) => {
  const siteTitle = useSiteTitle();
  const [collapse, setCollapse] = useState(true);
  const toggleNavigation = () => setCollapse(!collapse);

  return (
    <LayoutContext.Provider
      value={{ navigation: { collapse, toggleNavigation } }}
    >
      <Navbar siteTitle={siteTitle} transparent={transparent} />
      {breadcrumbs && breadcrumbs.length > 0 && (
        <Breadcrumbs
          items={[{ title: siteTitle, path: '/' }, ...breadcrumbs]}
        />
      )}
      <div className="wrapper">{children}</div>
    </LayoutContext.Provider>
  );
};

Layout.propTypes = {
  transparent: PropTypes.bool,
  breadcrumbs: Breadcrumbs.propTypes.items,
  children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
  breadcrumbs: [],
  transparent: false,
};

export default Layout;

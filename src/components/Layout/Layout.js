import React from 'react';
import PropTypes from 'prop-types';

import Navbar from './Navbar';
import Breadcrumbs from './Breadcrumbs';
import '../../stylesheet/main.scss';

const Layout = ({ siteTitle, transparent, breadcrumbs, children }) => (
  <>
    <Navbar siteTitle={siteTitle} transparent={transparent} />
    {breadcrumbs && breadcrumbs.length > 0 && (
      <Breadcrumbs items={[{ title: siteTitle, path: '/' }, ...breadcrumbs]} />
    )}
    <div className="wrapper">{children}</div>
  </>
);

Layout.propTypes = {
  transparent: PropTypes.bool,
  siteTitle: PropTypes.string,
  breadcrumbs: Breadcrumbs.propTypes.items,
  children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
  siteTitle: '',
  breadcrumbs: [],
  transparent: false,
};

export default Layout;

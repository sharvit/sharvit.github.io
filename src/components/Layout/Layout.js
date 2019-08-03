import React from 'react';
import PropTypes from 'prop-types';

import Navbar from './Navbar';
import '../../stylesheet/main.scss';

const Layout = ({ siteTitle, transparent, children }) => (
  <>
    <Navbar siteTitle={siteTitle} transparent={transparent} />
    <div className="wrapper">{children}</div>
  </>
);

Layout.propTypes = {
  transparent: PropTypes.bool,
  siteTitle: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
  siteTitle: '',
  transparent: false,
};

export default Layout;

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const Navbar = ({ siteTitle }) => (
  <nav className="navbar navbar-ct-transparent" role="navigation">
    <div className="container">
      {/* <!-- Brand and toggle get grouped for better mobile display --> */}
      <div className="navbar-header">
        <button
          type="button"
          className="navbar-toggle"
          data-toggle="collapse"
          data-target="#navigation"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <Link to="/" className="navbar-brand">
          {siteTitle}
        </Link>
      </div>

      {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
      <div className="collapse navbar-collapse" id="navigation">
        <ul className="nav navbar-nav navbar-right">
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/open-source">Open Source</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

Navbar.propTypes = {
  siteTitle: PropTypes.string,
};

Navbar.defaultProps = {
  siteTitle: ``,
};

export default Navbar;

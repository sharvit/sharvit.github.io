import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'gatsby';

const Navbar = ({ siteTitle, transparent }) => (
  <nav
    className={classNames(
      'navbar',
      transparent ? 'navbar-ct-transparent' : 'navbar-ct-primary'
    )}
    role="navigation"
  >
    <div className="container">
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
      <div className="collapse navbar-collapse" id="navigation">
        <ul className="nav navbar-nav navbar-right">
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/open-source">Open Source</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

Navbar.propTypes = {
  siteTitle: PropTypes.string,
  transparent: PropTypes.bool,
};

Navbar.defaultProps = {
  siteTitle: ``,
  transparent: false,
};

export default Navbar;

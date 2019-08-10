import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'gatsby';

import styles from './Navbar.module.scss';

const Navbar = ({ siteTitle, transparent, collapse, toggleNavigation }) => (
  <nav
    className={classNames(
      'navbar',
      styles.container,
      transparent ? 'navbar-ct-transparent' : 'navbar-ct-primary'
    )}
    role="navigation"
  >
    <div className="container">
      <div className="navbar-header">
        <button
          type="button"
          className={classNames('navbar-toggle', styles.navbarToggle)}
          onClick={() => toggleNavigation()}
        >
          <span className="sr-only">Toggle navigation</span>
          <span className={classNames('icon-bar', styles.iconBar)} />
          <span className={classNames('icon-bar', styles.iconBar)} />
          <span className={classNames('icon-bar', styles.iconBar)} />
        </button>
        <Link to="/" className="navbar-brand">
          {siteTitle}
        </Link>
      </div>
      <div className={classNames({ collapse }, 'navbar-collapse')}>
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
  collapse: PropTypes.bool,
  toggleNavigation: PropTypes.func,
};

Navbar.defaultProps = {
  siteTitle: ``,
  transparent: false,
  collapse: false,
  toggleNavigation: () => null,
};

export default Navbar;

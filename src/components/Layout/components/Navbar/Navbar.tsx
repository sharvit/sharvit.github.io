import React, { useContext } from "react";
import classNames from "classnames";
import { Link } from "gatsby";
import { Menu } from "react-feather";

import { ThemeToggler } from "../../../../theme/ThemeToggler";
import { GithubIcon } from "../../../Icons";
import { LayoutContext } from "../../LayoutContext";

import * as styles from "./Navbar.module.css";

export interface NavbarProps {
  transparent?: boolean;
}

export const Navbar = ({ transparent }: NavbarProps) => {
  const {
    navigation: { displayNavigation, toggleNavigation },
  } = useContext(LayoutContext);

  return (
    <nav
      role="navigation"
      className={classNames(styles.navbar, {
        [styles.transparent]: transparent === true,
        [styles.displayNavigation]: displayNavigation === true,
      })}
    >
      <button
        type="button"
        className={styles.toggler}
        onClick={() => toggleNavigation()}
      >
        <Menu />
      </button>

      <ul className={styles.linkList}>
        <li>
          <Link to="/">Home</Link>
        </li>
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

      <ul className={styles.iconLists}>
        <li>
          <ThemeToggler />
        </li>
        <li>
          <a href="https://github.com/sharvit">
            <GithubIcon />
          </a>
        </li>
      </ul>
    </nav>
  );
};

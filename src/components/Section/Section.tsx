import React from "react";
import classNames from "classnames";
import { Link } from "gatsby";

import * as styles from "./Section.module.css";

export interface ISectionProps {
  className?: string;
  title?: string;
  link?: string;
  linkExternal?: boolean;
  footer?: string;
  children?: React.ReactNode;
}

export const Section = ({
  className,
  title,
  link,
  linkExternal,
  footer,
  children,
}: ISectionProps) => {
  return (
    <section className={classNames(styles.section, className)}>
      {title && (
        <header className={styles.sectionHeader}>
          {link ? (
            <Link to={link}>
              <h2>{title}</h2>
            </Link>
          ) : (
            <h2>{title}</h2>
          )}
        </header>
      )}
      {children}
      {footer && (
        <footer className={styles.sectionFooter}>
          {link ? (
            linkExternal ? (
              <a href={link} target="_blank" rel="noopener noreferrer">
                {footer}
              </a>
            ) : (
              <Link to={link}>{footer}</Link>
            )
          ) : (
            footer
          )}
        </footer>
      )}
    </section>
  );
};

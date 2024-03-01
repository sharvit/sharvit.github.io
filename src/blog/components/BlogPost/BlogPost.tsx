import React, { useMemo } from "react";

import * as styles from "./BlogPost.module.css";

export interface IBlogPostProps {
  title: string;
  date: Date;
  html: string;
}

export const BlogPost = ({ title, date, html }: IBlogPostProps) => {
  const dateString = useMemo(() => date.toDateString(), [date]);
  const dateJson = useMemo(() => date.toJSON(), [date]);

  return (
    <article className={styles.post}>
      <header>
        <h1>{title}</h1>
        <time dateTime={dateJson}>{dateString}</time>
      </header>
      <div
        className={styles.postContent}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </article>
  );
};

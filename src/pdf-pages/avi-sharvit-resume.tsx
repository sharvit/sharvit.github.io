import React from 'react';

import {
  useAuthorProfile,
  useAuthorCV,
  useShortAboutHTML,
} from '../profile/hooks';

// import { ThemeProvider } from '../theme';

import * as styles from './avi-sharvit-resume.module.css';

export default function AviSharvitResumePDF() {
  const authorProfile = useAuthorProfile();
  const aboutHTML = useShortAboutHTML();
  const authorCV = useAuthorCV();

  return (
    <div className={styles.page}>
      <h1>
        {authorProfile.name} | {authorProfile.title}
      </h1>

      <section className={styles.contact}>
        <ul>
          <li>
            <strong>phone:</strong>{' '}
            <a href={`tel: ${authorProfile.phone}`}>{authorProfile.phone}</a>
          </li>
          <li>
            <strong>e-mail:</strong>{' '}
            <a href={`mailto: ${authorProfile.email}`}>{authorProfile.email}</a>
          </li>
          <li>
            <strong>website:</strong>{' '}
            <a href={authorProfile.website}>{authorProfile.website}</a>
          </li>
        </ul>
      </section>

      <section className={styles.about}>
        <h2>My Story</h2>
        <div dangerouslySetInnerHTML={{ __html: aboutHTML }} />
      </section>

      <section className={styles.skillsSection}>
        <h2>Main Skills</h2>
        <p className={styles.skills}>
          {authorCV.skills.map((skill) => (
            <span key={skill} className={styles.skill}>
              {skill}
            </span>
          ))}
        </p>
      </section>

      {authorCV.experiences.map((e) => (
        <div key={e.company} className={styles.experience}>
          <h3>{e.position}</h3>
          <h4>{e.company}</h4>
          <div className={styles.years}>{e.years}</div>
          <ul>
            {e.bulletPoints.map((bp) => (
              <li key={bp} className={styles.bulletPoint}>
                {bp}
              </li>
            ))}
          </ul>
          {/* <SkillsList skills={e.tags} /> */}
          {/* <hr /> */}
        </div>
      ))}
    </div>
  );
}

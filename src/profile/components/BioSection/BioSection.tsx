import React from 'react';

import { Section } from '../../../components';
import { useAuthorCV } from '../../hooks';

import * as styles from './BioSection.module.css';

const SkillsList = ({ skills }: { skills: string[] }) => (
  <p className={styles.skills}>
    {skills.map((skill) => (
      <span key={skill} className={styles.skill}>
        {skill}
      </span>
    ))}
  </p>
);

export const BioSection = () => {
  const authorCV = useAuthorCV();

  return (
    <Section className={styles.bioSection}>
      <div className={styles.skillsSection}>
        <h3>Main Skills</h3>
        <SkillsList skills={authorCV.skills} />
      </div>
      <hr />
      {authorCV.experiences.map((e) => (
        <div key={e.company} className={styles.experience}>
          <h3>{e.position}</h3>
          <h4>{e.company}</h4>
          <p className={styles.years}>{e.years}</p>
          <ul>
            {e.bulletPoints.map((bp) => (
              <li key={bp}>{bp}</li>
            ))}
          </ul>
          <SkillsList skills={e.tags} />
          <hr />
        </div>
      ))}
    </Section>
  );
};

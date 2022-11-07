import React from 'react';
import classNames from 'classnames';

import { getProgramingLanguageColor } from '../../../utils';

import * as styles from './LanguageIcon.module.css';

export interface ILanguageIconProps {
  programingLanguage: string;
  className?: string;
}

export const LanguageIcon = ({
  programingLanguage,
  className,
}: ILanguageIconProps) => (
  <span
    className={classNames(styles.languageIcon, className)}
    style={{ backgroundColor: getProgramingLanguageColor(programingLanguage) }}
  ></span>
);

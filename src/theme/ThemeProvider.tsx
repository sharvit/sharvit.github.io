import React, { useState, ReactNode, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useMediaQuery } from 'usehooks-ts';
import { ThemeContext, ColorSchemeType } from './ThemeContext';

import './styles/theme.css';

export interface IThemeProvider {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: IThemeProvider) => {
  const isSystemDark = useMediaQuery('(prefers-color-scheme: dark)');
  const [colorScheme, setColorScheme] = useState<ColorSchemeType>();

  useEffect(() => {
    if (colorScheme) return;

    setColorScheme(isSystemDark ? 'dark' : 'light');
  }, [isSystemDark, colorScheme]);

  const context = { colorScheme: colorScheme || 'light', setColorScheme };

  return (
    <ThemeContext.Provider value={context}>
      <Helmet htmlAttributes={{ 'color-scheme': colorScheme }} />
      {children}
    </ThemeContext.Provider>
  );
};

import React from 'react';
import type { WrapRootElementBrowserArgs } from 'gatsby';
import { ThemeProvider } from './src/theme/ThemeProvider';

export const wrapRootElement = (args: WrapRootElementBrowserArgs) => {
  return <ThemeProvider>{args.element}</ThemeProvider>;
};

import React, { useState, ReactNode, useEffect } from "react";
import { useMediaQuery } from "usehooks-ts";
import { ThemeContext, ColorSchemeType } from "./ThemeContext";

import "./styles/theme.css";

export interface IThemeProvider {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: IThemeProvider) => {
  const isSystemDark = useMediaQuery("(prefers-color-scheme: dark)");
  const [colorScheme, setColorScheme] = useState<ColorSchemeType>();

  const context = { colorScheme: colorScheme ?? "light", setColorScheme };

  useEffect(() => {
    if (colorScheme) return;

    setColorScheme(isSystemDark ? "dark" : "light");
  }, [isSystemDark, colorScheme]);

  useEffect(() => {
    if (!colorScheme) return;

    document.documentElement.setAttribute("color-scheme", colorScheme);
  }, [colorScheme]);

  return (
    <ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>
  );
};

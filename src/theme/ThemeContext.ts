import { createContext } from "react";

export type ColorSchemeType = "light" | "dark";

export interface IThemeContext {
  colorScheme?: ColorSchemeType;
  setColorScheme: (colorScheme?: ColorSchemeType) => void;
}

export const ThemeContext = createContext<IThemeContext>({
  colorScheme: undefined,
  setColorScheme: () => undefined,
});

import { useCallback, useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export const useThemeContext = () => useContext(ThemeContext);

export const useColorScheme = () => useThemeContext().colorScheme;

export const useColorSchemeToggler = () => {
  const { colorScheme, setColorScheme } = useThemeContext();

  return useCallback(() => {
    setColorScheme(colorScheme === "dark" ? "light" : "dark");
  }, [colorScheme, setColorScheme]);
};

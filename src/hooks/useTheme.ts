import { useContext } from "react";
import {
  ThemeContext,
  ThemeContextProps,
} from "../context/ThemeContext/ThemeContext";

/**
 * Custom hook to access the theme context.
 *
 * @returns {ThemeContextProps} The current theme context value.
 * @throws {Error} If the hook is used outside of a ThemeProvider.
 */
export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be use with a ThemeProvider");
  return context;
};

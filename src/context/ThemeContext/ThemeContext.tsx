import { createContext } from "react";

export type ThemeContextProps = {
  theme: string;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextProps>({
  theme: "dark",
  toggleTheme: () => {},
});

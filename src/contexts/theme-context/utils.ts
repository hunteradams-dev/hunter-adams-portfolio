import { ReactNode } from "react";

export const THEME = "theme";
export const CHANGE = "change";

export enum Themes {
  Light = "light",
  Dark = "dark",
}

export type ThemeContextValue = {
  theme: Themes;
  toggleTheme: () => void;
};

export type ThemeProviderProps = { children: ReactNode };

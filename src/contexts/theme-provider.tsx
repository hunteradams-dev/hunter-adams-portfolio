import { createContext, useContext, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global-style";
import { darkTheme, lightTheme } from "../styles/theme";

export enum Themes {
  Light = "light",
  Dark = "dark",
}

type ThemeContextValue = {
  theme: Themes;
  toggleTheme: () => void;
};

type ThemeProviderProps = { children: React.ReactNode };

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const ThemeProviderComponent = ({ children }: ThemeProviderProps) => {
  const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
  const [theme, setTheme] = useState<Themes>(() => {
    const savedMode = localStorage.getItem("theme") as Themes;
    return savedMode
      ? (savedMode as Themes)
      : prefersDarkMode.matches
      ? Themes.Dark
      : Themes.Light;
  });

  const toggleTheme = () => {
    setTheme(theme === Themes.Light ? Themes.Dark : Themes.Light);
    localStorage.setItem("theme", theme);
  };

  useEffect(() => {
    const handleChange = () => {
      setTheme(prefersDarkMode.matches ? Themes.Dark : Themes.Light);
    };
    prefersDarkMode.addEventListener("change", handleChange);

    return () => {
      prefersDarkMode.removeEventListener("change", handleChange);
    };
  }, [prefersDarkMode]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider
        theme={theme === Themes.Light ? { ...lightTheme } : { ...darkTheme }}
      >
        <>
          <GlobalStyle />
          {children}
        </>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

function useThemeContext() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("Theme context must be used within a provider.");
  }
  return context;
}

export { ThemeProviderComponent, useThemeContext };

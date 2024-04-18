// import React, { createContext, useContext, useEffect } from "react";
// import useLocalStorage from "use-local-storage";

// type ThemeContextValue = {
//   theme: string;
//   toggleTheme: (theme: any) => void;
// };

// type ThemeProviderProps = { children: React.ReactNode };

// const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

// function ThemeProvider({ children }: ThemeProviderProps) {
//   const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
//   const [theme, setTheme] = useLocalStorage(
//     "theme",
//     defaultDark ? "dark" : "light"
//   );
//   const nextTheme = theme === "light" ? "dark" : "light";

//   useEffect(() => {
//     document.body.dataset.theme = theme;
//   }, [theme]);

//   const toggleTheme = () => {
//     setTheme((prev) => prev === 'light' ? 'dark' : 'light');
//   };
//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }

// function useTheme() {
//   const context = useContext(ThemeContext);
//   if (context === undefined) {
//     throw new Error("Theme context must be used within a provider.");
//   }
//   return context;
// }

// export { ThemeProvider, useTheme };

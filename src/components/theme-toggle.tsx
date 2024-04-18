import { ChangeEvent } from "react";
import { Themes, useThemeContext } from "../contexts/theme-provider";
import { ToggleSwitch } from "./ui-components/toggle-switch";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeContext();
  const isDarkMode = theme === Themes.Dark;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let newTheme: Themes;
    if (e.target.checked) {
      newTheme = Themes.Dark;
    } else {
      newTheme = Themes.Light;
    }
    toggleTheme(newTheme);
  };

  return (
    <ToggleSwitch isChecked={isDarkMode} onChange={(e) => handleChange(e)} />
  );
};

import styled, { keyframes } from "styled-components";
import { Themes, useThemeContext } from "../contexts/theme-provider";
import MoonComponent from "../images/moon-component";
import SunComponent from "../images/sun-component";

const sunSetAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translate(0, 0);
  }
  100%{
    opacity: 1;
    transform: translate(25px, 25px);
  }
`;

const moonRiseAnimation = keyframes`
0% {
  opacity: 0;
  transform: translate(0, 0);
}

100% {
  transform: translate(25px, 25px);
  opacity: 1;
}
`;

const Sun = styled.div`
  transition: transform 0.5s ease;
  animation: ${sunSetAnimation} 0.5s forwards;
`;

const Moon = styled.div`
  transition: transform 0.5s ease;
  animation: ${moonRiseAnimation} 0.5s forwards;
`;

const FullSun = () => {
  return (
    <Sun>
      <SunComponent />
    </Sun>
  );
};

const FullMoon = () => {
  return (
    <Moon>
      <MoonComponent />
    </Moon>
  );
};

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeContext();
  const isDarkMode = theme === Themes.Dark;
  console.log(theme);

  return (
    <div>
      <button onClick={toggleTheme}>
        {isDarkMode ? <FullMoon /> : <FullSun />}
      </button>
    </div>
  );
};

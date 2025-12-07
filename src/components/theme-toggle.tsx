import styled, { keyframes } from "styled-components";
import {
  useThemeContext,
} from "../contexts/theme-context/theme-provider";
import MoonComponent from "../images/moon-component";
import SunComponent from "../images/sun-component";
import { Themes } from "../contexts/theme-context/utils";

const sunSetAnimation = keyframes`
0% {
  opacity: 0;
  transform: translate(25px, 25px);
}

100% {
  transform: translate(0px, 0px);
  opacity: 1;
}
`;

const moonRiseAnimation = keyframes`
0% {
  opacity: 0;
  transform: translate(25px, 25px);
}

100% {
  transform: translate(0px, 0px);
  opacity: 1;
}
`;

const MainCelestialContainer = styled.div`
  display: flex;
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

  return (
    <MainCelestialContainer>
      <button onClick={toggleTheme}>
        {isDarkMode ? <FullMoon /> : <FullSun />}
      </button>
    </MainCelestialContainer>
  );
};

import { useContext, useEffect } from "react";
import useLocalStorage from "use-local-storage";
import {
  LeftColumn,
  MainContainer,
  RightColumn,
} from "./components/main-container";
import { TitleCard } from "./components/title-card";
// import "./styles/index.css";
import { createGlobalStyle } from 'styled-components'
import { GlobalStyle } from "./styles/global-style";
import { useThemeContext, ThemeProviderComponent } from "./contexts/themeProvider";



function ThemeToggle() {
  const {theme, toggleTheme} = useThemeContext()

  return (
    <button onClick={toggleTheme}>
      Switch to {theme} theme.
    </button>
  );
}

export default function App() {
  return (
    <>
    <ThemeProviderComponent>

    <p>banana</p>
    <ThemeToggle />
    </ThemeProviderComponent>
    {/* <MainContainer>
      <TitleCard />
      <LeftColumn>
        <p>TEST</p>
      </LeftColumn>
      <RightColumn>
        <p>TEST</p>
      </RightColumn>
    </MainContainer> */}
    </>
  );
}

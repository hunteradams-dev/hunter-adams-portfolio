import { useEffect } from "react";
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



function ThemeToggle() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );
  const nextTheme = theme === "light" ? "dark" : "light";

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  return (
    <button onClick={() => setTheme(nextTheme)}>
      Switch to {nextTheme} theme.
    </button>
  );
}

export default function App() {

  return (
    <>
    <GlobalStyle />
    <p>banana</p>
    {/* <MainContainer>
      <ThemeToggle />
      <LeftColumn>
      <TitleCard />
        <p>TEST</p>
      </LeftColumn>
      <RightColumn>
        <p>TEST</p>
      </RightColumn>
    </MainContainer> */}
    </>
  );
}

import { TitleCard } from "./components/title-card";
import { ThemeProviderComponent, useThemeContext } from "./contexts/theme-provider";



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
    <ThemeToggle />
    <TitleCard />
    </ThemeProviderComponent>
    </>
  );
}

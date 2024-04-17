import { useEffect } from "react";
import useLocalStorage from "use-local-storage";
import { TitleCard } from "./components/title-card";
import "./styles/index.css";

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
  // const switchTheme = () => {
  //   const newTheme: string = theme === "light" ? "dark" : "light";
  //   setTheme(newTheme);
  // };

  return (
    <div
      className="app"
      // data-theme={theme}
      style={{ width: "100%", height: "100%" }}
    >
      <TitleCard />
      <ThemeToggle />
    </div>
  );
}

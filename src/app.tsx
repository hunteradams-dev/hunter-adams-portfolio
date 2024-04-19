import {
  LeftColumn,
  MainContainer,
  RightColumn,
} from "./components/main-container";
import { ThemeToggle } from "./components/theme-toggle";
import { TitleCard } from "./components/title-card";
import { ThemeProviderComponent } from "./contexts/theme-provider";

export default function App() {
  return (
    <>
      <ThemeProviderComponent>
        <MainContainer>
          <LeftColumn>
            <TitleCard />
          </LeftColumn>
          <RightColumn>
            <ThemeToggle />
          </RightColumn>
        </MainContainer>
      </ThemeProviderComponent>
    </>
  );
}

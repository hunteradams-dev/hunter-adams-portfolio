import { AboutSection } from "./components/about";
import { Footer } from "./components/footer";
import {
  GridItem,
  LeftColumn,
  MainContainer,
  RightColumn,
} from "./components/main-container";
import { NavItems } from "./components/nav";
import { ProjectsSection } from "./components/projects";
import { ThemeToggle } from "./components/theme-toggle";
import { TitleCard } from "./components/title-card";
import { WorkSection } from "./components/work";
import { ThemeProviderComponent } from "./contexts/theme-provider";

export default function App() {
  return (
    <>
      <ThemeProviderComponent>
        <MainContainer className="content">
          <LeftColumn>
            <GridItem>
              <TitleCard />
              <ThemeToggle />
            </GridItem>
            <GridItem>
              <NavItems />
            </GridItem>
          </LeftColumn>
          <RightColumn>
            <GridItem>
              <AboutSection />
            </GridItem>
            <GridItem>
              <WorkSection />
            </GridItem>
            <GridItem>
              <ProjectsSection />
            </GridItem>
          </RightColumn>
        </MainContainer>
        <Footer />
      </ThemeProviderComponent>
    </>
  );
}

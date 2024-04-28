import { AboutSection } from "./components/about";
import { Footer } from "./components/footer";
import {
  GridItem,
  Header,
  LeftColumn,
  MainContainer,
  RightColumn,
} from "./components/main-container";
import { ProjectsSection } from "./components/projects";
import { ThemeToggle } from "./components/theme-toggle";
import { TitleCard } from "./components/title-card";
import { SectionHeader } from "./components/ui-components/section-header";
import { WorkSection } from "./components/work";
import { ThemeProviderComponent } from "./contexts/theme-provider";

export default function App() {
  return (
    <ThemeProviderComponent>
      <MainContainer>
        <Header>
          <ThemeToggle />
        </Header>
        <LeftColumn>
          <GridItem>
            <TitleCard />
          </GridItem>
          <GridItem>
            <AboutSection />
          </GridItem>
        </LeftColumn>
        <RightColumn>
        <SectionHeader text="Work" />
          <GridItem>
            <WorkSection />
          </GridItem>
          <SectionHeader text="Projects" />
          <GridItem>
            <ProjectsSection />
          </GridItem>
        </RightColumn>
        <Footer />
      </MainContainer>
    </ThemeProviderComponent>
  );
}

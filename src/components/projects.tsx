import styled from "styled-components";
import { SectionHeader } from "./ui-components/section-header";

const ProjectsDiv = styled.div``;

export const ProjectsSection = () => {
  return (
    <ProjectsDiv>
      <section>
        <SectionHeader text="Projects" />
        <h3>Portfolio Website</h3>
        <p>
          My portfolio website, which is basically my playground to test out new
          ideas. It is forever under construction for this reason. Future plans
          include a blog so I have an excuse to hook up a back-end.
        </p>
        <p>Tech: Typescript, Javascript, HTML, CSS</p>
        <h3>Duck Dive</h3>
        <p>
          I collected data on all the different ducks I saw where I used to
          live, and made a neat ThreeJS website to display the data I'd found.
        </p>
        <p>MORE COMING SOON</p>
      </section>
    </ProjectsDiv>
  );
};

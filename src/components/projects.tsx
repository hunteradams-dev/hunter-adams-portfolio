import styled from "styled-components";
import { techStackArr } from "../utils";
import { SectionHeader } from "./ui-components/section-header";
import { BulletContainer, TechStackColumn } from "./ui-components/tech-stacks";

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.cardBackground};
  gap: 1rem;
  border-radius: 30px;
  width: 100%;
  height: 100%;
  padding: 1rem;

  box-shadow: 0px 2px 4px rgba(0, 0, 0, 10.1); /* Initial shadow */
  transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2); /* Raised shadow on hover */
    transform: translateY(-8px); /* Slightly lift the card */
  }
`;

export const ProjectsSection = () => {
  const itemsColOne = techStackArr.slice(0, 2);
  const itemsColTwo = techStackArr.slice(2, 4);
  return (
    <section>
      <SectionHeader text="Projects" />
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <ProjectContainer>
          <h3>Portfolio Website</h3>
          <p>
            That would be this very website, which is basically my playground to
            test out new ideas. It is forever under construction for this
            reason. Future plans include a blog so I have an excuse to hook up a
            back-end.
          </p>
          <BulletContainer>
            <TechStackColumn items={itemsColOne} />
            <TechStackColumn items={itemsColTwo} />
          </BulletContainer>
        </ProjectContainer>
        <ProjectContainer>
          <h3>Portfolio Website V1</h3>
          <p>
            The first iteration of my website. It was made using raw HTML, CSS
            and Javascript, and is fully responsive.
          </p>
          <BulletContainer>
            <TechStackColumn items={itemsColOne} />
            <TechStackColumn items={itemsColTwo} />
          </BulletContainer>
        </ProjectContainer>
        <ProjectContainer>
          <h3>Duck Dive (Under Construction🚧🦆)</h3>
          <p>
            I collected data on all the different ducks I saw where I used to
            live, and made a neat ThreeJS website to display the data I'd found.
          </p>
        </ProjectContainer>
        <div>
          <p>
            Check back in here for updates, I've always got things in the
            pipeline.
          </p>
        </div>
      </div>
    </section>
  );
};

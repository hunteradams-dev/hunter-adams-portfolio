import styled from "styled-components";
import { techStackArr } from "../utils";
import { SectionHeader } from "./ui-components/section-header";
import { BulletContainer, TechStackColumn } from "./ui-components/tech-stacks";

const ProjectContainer = styled.div``;

export const ProjectsSection = () => {
  const itemsColOne = techStackArr.slice(0, 2);
  const itemsColTwo = techStackArr.slice(2, 4);
  return (
    <section>
      <SectionHeader text="Projects" />
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div>
          <h3>Portfolio Website</h3>
          <p>
            My portfolio website, which is basically my playground to test out
            new ideas. It is forever under construction for this reason. Future
            plans include a blog so I have an excuse to hook up a back-end.
          </p>
          <BulletContainer>
            <TechStackColumn items={itemsColOne} />
            <TechStackColumn items={itemsColTwo} />
          </BulletContainer>
        </div>
        <div>
          <h3>Duck Dive</h3>
          <p>
            I collected data on all the different ducks I saw where I used to
            live, and made a neat ThreeJS website to display the data I'd found.
          </p>
          <p>MORE COMING SOON</p>
        </div>
      </div>
    </section>
  );
};

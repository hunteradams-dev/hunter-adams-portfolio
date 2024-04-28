import { techStackArr } from "../utils";
import { CardContainer } from "./ui-components/card";
import { StyledLink } from "./ui-components/styled-link";
import { BulletContainer, TechStackColumn } from "./ui-components/tech-stacks";

export const ProjectsSection = () => {
  const itemsColOne = techStackArr.slice(0, 2);
  const itemsColTwo = techStackArr.slice(2, 4);
  return (
    <section>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <CardContainer>
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
        </CardContainer>
        <CardContainer>
          <StyledLink href="https://hunteradamsdev-portfolio.netlify.app/" target="_blank"><h3>Portfolio Website V1</h3></StyledLink>
          <p>
            The first iteration of my website. It was made using raw HTML, CSS
            and Javascript, and is fully responsive.
          </p>
          <BulletContainer>
            <TechStackColumn items={itemsColOne} />
            <TechStackColumn items={itemsColTwo} />
          </BulletContainer>
        </CardContainer>
        <CardContainer>
          <h3>Duck Dive (Under Construction🚧🦆)</h3>
          <p>
            I collected data on all the different ducks I saw where I used to
            live, and made a neat ThreeJS website to display the data I'd found.
          </p>
        </CardContainer>
        <div>
          <p>
            Check back in here for updates, I've always got things in the
            pipeline. 💭
          </p>
        </div>
      </div>
    </section>
  );
};

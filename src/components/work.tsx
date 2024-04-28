import JoobSleeping from "../images/joob-sleeping-with-shadow";
import Resume from "../static/hunter-adams-resume-2024.pdf";
import { techStackArr } from "../utils";
import { CardContainer } from "./ui-components/card";
import { StyledLink } from "./ui-components/styled-link";
import { BulletContainer, TechStackColumn } from "./ui-components/tech-stacks";

const arrow = String.fromCodePoint(0x1f865);

export const WorkSection = () => {
  const halfway = Math.ceil(techStackArr.length / 2);
  const columnOneItems = techStackArr.slice(0, halfway);
  const columnTwoItems = techStackArr.slice(halfway);

  return (
    <CardContainer>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <p>Feb 2023 - present</p>
        <h3>Full-Stack Software Engineer - SwiftFox</h3>
        <p>
          Build, maintain and ship new features spanning the entire product;
          front and back-end, as well as maintaining/updating existing features.
        </p>
        <p>
          Highlight: Project lead on SwiftFox Automations, a feature that allows
          users to Automate any chain of events inside the CRM.
        </p>
        <BulletContainer>
          <TechStackColumn items={columnOneItems} />
          <TechStackColumn items={columnTwoItems} />
        </BulletContainer>

        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <p>
            You can find my full resume
            <StyledLink href={Resume} target="_blank">
              <span> here {arrow}</span>
            </StyledLink>
          </p>
          <JoobSleeping />
        </div>
      </div>
    </CardContainer>
  );
};

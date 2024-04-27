import JoobSleeping from "../images/joob-sleeping-with-shadow";
import Resume from "../static/hunter-adams-resume-2024.pdf";
import { SectionHeader } from "./ui-components/section-header";
import { BulletContainer, TechStackColumn } from "./ui-components/tech-stacks";

const sfStack = [
  "React",
  "Typescript/JavaScript",
  "C#",
  ".NET",
  "NodeJS/ExpressJS",
  "HTML",
  "CSS",
  "SQL",
  "Docker",
  "GraphQL",
  "Azure Cosmos DB",
  "Jest",
];

const linkUni = String.fromCodePoint(0x1f865)


export const WorkSection = () => {
  const halfway = Math.ceil(sfStack.length / 2);
  const columnOneItems = sfStack.slice(0, halfway);
  const columnTwoItems = sfStack.slice(halfway);

  return (
    <div>
      <section>
        <SectionHeader text="Work" />
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
            <a href={Resume} target="_blank">
              <span> here {linkUni}</span>
            </a>
          </p>
          <JoobSleeping />
        </div>
      </section>
    </div>
  );
};

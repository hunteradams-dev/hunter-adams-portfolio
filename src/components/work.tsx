import JoobSleepingWithShadow from "../images/joob-sleeping-with-shadow";
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

export const WorkSection = () => {
  const halfway = Math.ceil(sfStack.length / 2);
  const columnOneItems = sfStack.slice(0, halfway);
  const columnTwoItems = sfStack.slice(halfway);

  return (
    <div>
      <section>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center'}}>
          <SectionHeader text="Work" />
          <JoobSleepingWithShadow />
        </div>
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

        <p>You can find my full resume here.</p>
      </section>
    </div>
  );
};

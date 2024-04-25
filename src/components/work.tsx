import styled from "styled-components";
import { SectionHeader } from "./ui-components/section-header";
import { TechTab } from "./ui-components/tech";

const WorkDiv = styled.div``;

export const WorkSection = () => {
  return (
    <WorkDiv>
      <section>
        <SectionHeader text="Work" />
        <p>Feb 2023 - present</p>
        <h3>Full-Stack Software Engineer - SwiftFox</h3>
        <p>
          Build, maintain and ship new features inside of the entire product,
          front and back-end, as well as maintaining/updating existing features.
          
        </p>
        <p>
          Highlight: Project lead on SwiftFox
          Automations, a feature that allows users to Automate any chain of
          events inside the CRM.
          </p>
        <p>
          <TechTab /> React | Typescript/Javascript | C# | .NET | NodeJS/ExpressJS |
          HTML | CSS | SQL | GraphQL | Azure Cosmos DB | Elsa Workflows API | Jest
        </p>

        <p>You can find my full resume here.</p>
      </section>
    </WorkDiv>
  );
};

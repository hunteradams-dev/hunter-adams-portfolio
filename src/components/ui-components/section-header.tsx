import styled from "styled-components";

const TitleDisplay = styled.h3`
  padding: 1rem 0;
  @media (min-width: 700px) {
    display: none;
  }
`;

export const SectionHeader = ({ text }: { text: string }) => {
  return <TitleDisplay>{text}</TitleDisplay>;
};

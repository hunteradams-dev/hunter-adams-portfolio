import styled from "styled-components";

const TitleDisplay = styled.h2`
  padding: 1rem 0;
  @media (max-width: 1000px) {
    font-weight: 700;
  }
`;

export const SectionHeader = ({ text }: { text: string }) => {
  return <TitleDisplay>{text}</TitleDisplay>;
};

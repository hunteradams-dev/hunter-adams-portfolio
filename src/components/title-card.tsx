import styled from "styled-components";

export const NameContainer = styled.div({
  padding: 20,
  color: "var(--text-primary)",
  backgroundColor: "var(--background}",
});

export const TitleCard = () => {
  return (
    <NameContainer>
      <h1>Hunter Adams</h1>
      <h2>Full-Stack Web Developer</h2>
    </NameContainer>
  );
};

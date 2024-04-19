import styled from "styled-components";

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`


export const TitleCard = () => {
  return (
    <TitleContainer>
      <h1>Hunter Adams</h1>
      <h2>Full-Stack Web Developer</h2>
    </TitleContainer>
  );
};

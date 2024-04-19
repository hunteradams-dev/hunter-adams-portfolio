import styled from "styled-components";

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  gap: 20px;
  height: 100%;
  width: 100%;
  padding: 0 1rem;

  @media (max-width: 700px){
    grid-template-columns: 1fr;
    text-align: left;
  }
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

 
`;

export const RightColumn = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;
export const GridItem = styled.div`
  display: flex;

  @media (max-width: 700px){
    width: 100%;
  }

`;

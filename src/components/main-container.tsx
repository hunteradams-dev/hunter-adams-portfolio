import styled from "styled-components";

export const MainContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: auto 1fr auto;
grid-column-gap: 4rem;
grid-row-gap: 0;
width: 100%;
padding: 2rem 5rem;
height: 100vh;
min-height: calc(100vh - 180px);

@media (max-width: 1000px) {
  grid-template-columns: 1fr;
  text-align: left;
  padding: 0 1rem;
}

@media (min-width: 2000px){
  padding: 2rem 30rem;
}
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  gap: 5rem;

  @media (max-width: 1000px){
    gap: 1rem;
    padding: 0 0.5rem;
  }
`;

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0.5rem;
`;
export const GridItem = styled.div`
  display: flex;
  height: auto;
  width: 100%;

  @media (max-width: 1000px) {
    width: 100%;
    height: 100%;
  }
`;

export const Header = styled.div`
  display: flex;
  grid-column: 1 / span 2;
  height: 80px;
  justify-content: flex-end;

  @media (max-width: 1000px) {
    grid-column: 1;
    height: 40px;
  }
`;

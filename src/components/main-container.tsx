import styled from "styled-components";

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  gap: 20px;
  height: 100%;
  width: 100%;
`;

export const LeftColumn = styled.div`
  padding: 1rem 0;
  height: 100%;
`;

export const RightColumn = styled.div`
    grid-area: left
    height: 100%;
    align-items: center;
    justify-content: center;
`;
export const GridItem = styled.div`
  grid-area: right;
  align-items: center;
  justify-content: center;
`;

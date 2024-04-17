import styled from "styled-components";

export const MainContainer = styled.div`
display: flex;
flex-wrap: wrap;
height: 100%

@media(max-width: 768px){
    flex-direction: column;
}
`;

export const LeftColumn = styled.div`
    grid-area: left;
`

export const RightColumn = styled.div`
    grid-area: right;
`


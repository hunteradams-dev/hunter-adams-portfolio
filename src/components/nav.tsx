import styled from "styled-components";

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  
  @media (max-width: 700px){
    display: none;
  }
`;

export const NavButton = styled.button`

`;

export const NavItems = () => {
  return (
    <NavContainer role="navigation">
      <NavButton role="navigation" aria-label="Scroll to About Me Section">About</NavButton>
      <NavButton role="navigation" aria-label="Scroll to Work Section">Work</NavButton>
      <NavButton role="navigation" aria-label="Scroll Projects Section">Projects</NavButton>
    </NavContainer>
  );
};

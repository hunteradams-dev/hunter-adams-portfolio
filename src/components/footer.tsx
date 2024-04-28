import styled from "styled-components";
import GithubIcon from "../images/github";
import LinkedInIcon from "../images/linkedin";

const FooterContainer = styled.footer`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80px;
  grid-column: 1 / span 2;

  @media (max-width: 1000px) {
    grid-column: 1;
  }
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <GithubIcon />
      <LinkedInIcon />
    </FooterContainer>
  );
};

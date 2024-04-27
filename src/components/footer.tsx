import styled from "styled-components";
import { useThemeContext } from "../contexts/theme-provider";
import GithubIcon from "../images/github";
import LinkedInIcon from "../images/linkedin";

const FooterContainer = styled.footer`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100px;
`;

export const Footer = () => {
  const { theme } = useThemeContext();

  return (
    <FooterContainer>
      <GithubIcon />
      <LinkedInIcon />
    </FooterContainer>
  );
};

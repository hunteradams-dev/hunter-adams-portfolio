import styled from "styled-components";
import { useThemeContext } from "../../contexts/theme-provider";

const TechWrapper = styled.span`
  background: ${({ theme }) => theme.labelBackground};
  padding: 0.3rem;
  border-radius: 10px;
  color: ${({ theme }) => theme.textTertiary};
  font-family: 'Belanosima';
  font-weight: 800;
`;

export const TechTab = () => {
  const { theme } = useThemeContext();

  return <TechWrapper>Tech:</TechWrapper>;
};

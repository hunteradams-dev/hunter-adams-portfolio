import { createGlobalStyle } from "styled-components";
import fonts from "./fonts";

export const GlobalStyle = createGlobalStyle`
${fonts};
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.textPrimary};
    margin: 0;
    padding: 0;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    scroll-behavior: smooth;

  }

  h1 {
    font-family: "Belanosima";
    font-size: clamp(20px, 4vw, 80px);
    color: inherit;
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 10px;
    color: pink;
  }
`;

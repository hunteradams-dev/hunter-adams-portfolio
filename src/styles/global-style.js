import { createGlobalStyle } from "styled-components";
import fonts from "./fonts";

export const GlobalStyle = createGlobalStyle`
${fonts};



  * {
    margin: 0;
    padding: 0;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }

  #root,
  #__next {
    isolation: isolate;
  }

  html {
    width: 100%;
    height: 100%;
  }

  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.textPrimary};
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    scroll-behavior: smooth;

  }

  h1 {
    font-family: "Belanosima";
    font-size: clamp(20px, 4vw, 80px);
  }

  h2 {
    font-family: "Lato";
    font-size: clamp(10px, 2vw, 40px);
    font-weight: 400;
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 10px;
    color: pink;
  }
`;

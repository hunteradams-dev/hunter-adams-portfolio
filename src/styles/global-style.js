import { createGlobalStyle } from "styled-components";
import fonts from "./fonts";

export const GlobalStyle = createGlobalStyle`
${fonts};



  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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

  h2,
  h4,
  h5,
  h6,
  p {
    overflow-wrap: break-word;
    font-family: Lato
  }

  h6,
  h5,
  h4,
  h3,
  h2,
  h1 {
    opacity: ${({ theme }) => theme.opacityH};
  }

  h3{
    font-family: Belanosima;
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
    width: 100%;
  }

  h1 {
    font-family: "Belanosima";
    font-size: clamp(40px, 8vw, 80px);
  }

  h2 {
    font-family: "Lato";
    font-size: clamp(20px, 4vw, 40px);
    font-weight: 400;
  }

  button {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    color: inherit;
  }

  p {
    margin-bottom: 10px;
    color: inherit;
    opacity: ${({ theme }) => theme.opacityP}
  }

  li {
    font-family: 'Lato';
  }
`;

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
    // transition: all 0.25s ease-out;
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
    opacity: 0.7
  }
`;

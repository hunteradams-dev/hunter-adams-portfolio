import { createGlobalStyle } from "styled-components";
import fonts from "./fonts";

export const GlobalStyle = createGlobalStyle`
${fonts};
  body {
    font-family: Arial, sans-serif;
    background-color: red;
    color: #333333;
    margin: 0;
    padding: 0;
    font-family: "Belanosima";
  }

  h1 {
    font-size: 2rem;
    font-weight: bold;
    color: #007bff;
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 10px;
    color: pink;
  }

  /* Add more global styles as needed */
`;

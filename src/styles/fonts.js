import { css } from "styled-components";
import BelanosimaRegular from "../fonts/Belanosima/BelanosimaRegular.woff2";

const belanosimaWeights = {
  600: BelanosimaRegular,
};

const belanosima = {
  name: "Belanosima",
  normal: belanosimaWeights,
  italic: null,
};

const buildFontFaces = (family, style = "normal") => {
  let fontFaces = "";

  for (const [weight, formats] of Object.entries(family[style])) {
    fontFaces += `
        @font-face {
            font-family: '${family.name}';
            src: url(${formats}) format('woff2');
            font-weight: ${weight};
            font-style: ${style};
            font-display: auto;
        }`;
  }
  return fontFaces;
};

const belanosimaNormal = buildFontFaces(belanosima);

const Fonts = css`
  ${belanosimaNormal}
`;

export default Fonts
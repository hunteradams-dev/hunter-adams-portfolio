import { css } from "styled-components";

import BelanosimaRegular from "../fonts/Belanosima/BelanosimaRegular.woff2";
import LatoBold700 from "../fonts/Lato/LatoBold700.woff2";
import LatoBold900 from "../fonts/Lato/LatoBold900.woff2";
import LatoItalic400 from "../fonts/Lato/LatoItalic400.woff2";
import LatoItalic700 from "../fonts/Lato/LatoItalic700.woff2";
import LatoItalic900 from "../fonts/Lato/LatoItalic900.woff2";
import LatoRegular400 from "../fonts/Lato/LatoRegular400.woff2";

const belanosimaWeights = {
  600: BelanosimaRegular,
};

const latoNormalWeights = {
  400: LatoRegular400,
  700: LatoBold700,
  900: LatoBold900,
};

const latoItalicWeights = {
  400: LatoItalic400,
  700: LatoItalic700,
  900: LatoItalic900,
};

const belanosima = {
  name: "Belanosima",
  normal: belanosimaWeights,
  italic: null,
};

const lato = {
  name: "Lato",
  normal: latoNormalWeights,
  italic: latoItalicWeights,
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

const latoNormal = buildFontFaces(lato);
const latoItalic = buildFontFaces(lato, "italic");

const Fonts = css`
  ${belanosimaNormal + latoNormal + latoItalic}
`;

export default Fonts;

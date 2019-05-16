import Typography from "typography";
import colors from "./colors";

const typography = new Typography({
  bodyColor: colors.black,
  headerColor: colors.black,
  baseFontSize: "18px",
  scaleRatio: 3,
  baseLineHeight: 1.6,

  // see src/components/Layout.js for font import
  headerFontFamily: ["IBM Plex Sans", "sans-serif"],
  bodyFontFamily: ["IBM Plex Sans", "sans-serif"],
  
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    a: {
      color: colors.primary
    },
    blockquote: {
      fontStyle: "italic"
    },
    code: {
      fontSize: "inherit"
    },
    pre: {
      fontSize: "inherit"
    }
  })
});

export default typography;

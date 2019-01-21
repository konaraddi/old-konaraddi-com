import Typography from "typography";
import colors from "./colors";

const typography = new Typography({
  bodyColor: colors.black,
  headerColor: colors.black,
  baseFontSize: "18px",
  scaleRatio: 3,
  baseLineHeight: 1.8,
  headerFontFamily: ["IBM Plex Sans", "sans-serif"],
  bodyFontFamily: ["IBM Plex Serif", "serif"],
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    a: {
      color: colors.primary
    },
    pre: {
      overflow: "auto",
      margin: 0
    }
  })
});

export default typography;

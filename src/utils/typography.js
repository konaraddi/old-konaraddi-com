import Typography from "typography";
import colors from "./colors";

// TODO change base font size on mobile to something smaller
// or change scaling
const typography = new Typography({
  bodyColor: colors.black,
  headerColor: colors.black,
  baseFontSize: "18px",
  scaleRatio: 3,
  baseLineHeight: 1.8,
  headerFontFamily: ["IBM Plex Sans", "sans-serif"],
  bodyFontFamily: ["IBM Plex Serif", "serif"],
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    pre: {
      overflow: "auto",
      margin: 0
    }
  })
});

export default typography;

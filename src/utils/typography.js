import Typography from "typography";
import colors from "./colors";

const typography = new Typography({
  bodyColor: colors.black,
  headerColor: colors.black,
  baseFontSize: "19px",
  scaleRatio: 3,
  baseLineHeight: 1.5,

  // see src/components/Layout.js for font import
  headerFontFamily: ["Zilla Slab", "sans-serif"],
  bodyFontFamily: ["Zilla Slab", "sans-serif"],
  
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    a: {
      color: colors.primary
    },
    blockquote: {
      fontStyle: "italic"
    }
  })
});

export default typography;

import Typography from "typography";
import colors from "./colors";

const typography = new Typography({
  bodyColor: colors.black,
  headerColor: colors.black,
  baseFontSize: "18px",
  scaleRatio: 2.5,
  baseLineHeight: 1.6,

  // see src/components/Layout.js for font import
  headerFontFamily: ["sans-serif"],
  bodyFontFamily: ["sans-serif"],

  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    a: {
      color: colors.black,
      textDecoration: "none",
      cursor: "pointer",

      // for the cool underline
      "-webkit-transition": "all 200ms cubic-bezier(0.18,0.89,0.32,1.28)",
      transition: "all 200ms cubic-bezier(0.18,0.89,0.32,1.28)",
      boxShadow: `inset 0 -0.15rem 0 0 ${colors.primary}`,
      paddingBottom: "0.15rem"
    },
    "a:hover": {
      // for the cool underline
      boxShadow: `inset 0 -0.65rem 0 0 ${colors.primary}`
    },
    'a[target="_blank"]:after': {
      content: ` '\\002197'`,
      paddingRight: "0rem"
    },
    blockquote: {
      marginLeft: 0,
      paddingLeft: "1.25rem",
      borderLeft: `0.1rem solid ${colors.black}`
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

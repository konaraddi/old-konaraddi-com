import Typography from "typography";
import "typeface-ibm-plex-sans"
import "typeface-ibm-plex-serif"

const typography = new Typography({
  baseFontSize: "20px",
  baseLineHeight: 1.666,
  headerFontFamily: ["IBM Plex Sans", "sans-serif"],
  bodyFontFamily: ["IBM Plex Serif", "serif"]
});

export default typography;

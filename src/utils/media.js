import { css } from "styled-components";
// https://www.styled-components.com/docs/advanced#media-templates
// slightly modified

// minimum widths !!!
const sizes = {
  fullhd: 1408,
  widescreen: 1216,
  desktop: 1024,
  tablet: 769,
  phone: 0
};

// Iterate through the sizes and create a media template
export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

/*
import media from "media.js"

const Content = styled.div`
  height: 3em;
  width: 3em;
  background: papayawhip;

  ${media.desktop`background: dodgerblue;`}
  ${media.tablet`background: mediumseagreen;`}
  ${media.phone`background: palevioletred;`}
`;
*/

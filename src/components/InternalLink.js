import React from "react";
import { Link } from "gatsby";
import colors from "../utils/colors";
import styled from "styled-components";

// This is done because the internal link styling is used elsewhere too
// in conjunction with other styles. Styled Components doesn't support
// wrapping another Styled Component (without there being buggy stuff)
// so we export/import this style.
//
const internalLinkStyling = `
  text-decoration: none;
  font-weight: normal;
  color: ${colors.primary};
  :hover {
    background-color: ${colors.primary};
    color: ${colors.white}
  }
`;

const InternalLink = styled(Link)`
  ${internalLinkStyling}
`;

export default ({ to, children }) => (
  <InternalLink to={to}>{children}</InternalLink>
);

export { internalLinkStyling };

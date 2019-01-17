import React from "react";
import { Link } from "gatsby";
import colors from "../utils/colors";
import styled from "styled-components";

const InternalLinkWrapper = styled(Link)`
  text-decoration: none;
  font-weight: normal;
  color: inherit;
  :hover {
    text-decoration: none;
    background-color: ${colors.black};
    color: ${colors.white};
  }
`;

export default ({ to, children, style }) => (
  <InternalLinkWrapper to={to} style={style}>
    {children}
  </InternalLinkWrapper>
);

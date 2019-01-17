import React from "react";
import { Link } from "gatsby";
import colors from "../utils/colors";
import styled from "styled-components";

const InternalLinkWrapper = styled(Link)`
  text-decoration: none;
  font-weight: normal;
  color: inherit;

  // for the underline
  -webkit-transition: all 200ms cubic-bezier(0.18, 0.89, 0.32, 1.28);
  transition: all 200ms cubic-bezier(0.18, 0.89, 0.32, 1.28);
  box-shadow: inset 0 -0.75rem 0 0 ${colors.primary};
  padding-bottom: 0.15rem;
  :hover {
    box-shadow: inset 0 -1.5rem 0 0 ${colors.primary};
  }
`;

export default function({ to, children, style }) {
  return (
    <InternalLinkWrapper
      to={to}
      style={style}
      activeStyle={{
        pointerEvents: "none",
        cursor: "not-allowed",
        opacity: 0.3
      }}
    >
      {children}
    </InternalLinkWrapper>
  );
}

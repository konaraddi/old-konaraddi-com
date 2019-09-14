import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import media from "../utils/media";
import colors from "../utils/colors";

let NavLink = styled(Link)`
  text-transform: uppercase;
  padding-bottom: 0.15rem;

  /* for the cool underline */
  box-shadow: inset 0 -0.25rem 0 0 ${colors.secondary};
  &:hover {
    box-shadow: inset 0 -0.75rem 0 0 ${colors.secondary};
  }
`;

const LinkWrapper = ({ to, children }) => (
  <NavLink
    to={to}
    activeStyle={{
      pointerEvents: "none",
      cursor: "not-allowed",
      opacity: 0.25,
      boxShadow: "none"
    }}
  >
    {children}
  </NavLink>
);

const LinkAlignment = styled.h4`
  margin-right: 1rem;
  ${media.tablet`
  margin-right: 1.5rem;
`}
  :last-child {
    margin-right: 0rem;
  }
`;

export default () => (
  <nav style={{ display: "flex" }}>
    <LinkAlignment>
      <LinkWrapper to="/" activeStyle={{ cursor: "nopointer" }}>
        <strong>Omkar</strong>
      </LinkWrapper>
    </LinkAlignment>
    <LinkAlignment style={{ marginLeft: "auto" }}>
      <LinkWrapper to="/posts/" activeStyle={{ visibility: "hidden" }}>
        <strong>Posts</strong>
      </LinkWrapper>
    </LinkAlignment>
    <LinkAlignment>
      <LinkWrapper to="/projects/" activeStyle={{ visibility: "hidden" }}>
        <strong>Projects</strong>
      </LinkWrapper>
    </LinkAlignment>
  </nav>
);

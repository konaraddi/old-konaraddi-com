import React from "react";
import InternalLink from "./InternalLink";
import styled from "styled-components";
import media from "../utils/media";

const Nav = styled.nav`
  display: flex;
`;

const H3 = styled.h3`
  margin-right: 0.75rem;
  ${media.tablet`
    margin-right: 1.5rem;
  `}
  :last-child {
    margin-right: 0rem;
  }
`;

export default () => (
  <Nav>
    <H3>
      <InternalLink to="/" style={{ textDecoration: "none" }}>
        O.K.
      </InternalLink>
    </H3>
    <H3 style={{ marginLeft: "auto" }}>
      <InternalLink to="/posts" style={{ textDecoration: "none" }}>
        Posts
      </InternalLink>
    </H3>
    <H3>
      <InternalLink to="/projects" style={{ textDecoration: "none" }}>
        Projects
      </InternalLink>
    </H3>
  </Nav>
);

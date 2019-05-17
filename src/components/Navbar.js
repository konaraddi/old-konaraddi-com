import React from "react";
import InternalLink from "./InternalLink";
import styled from "styled-components";
import media from "../utils/media";

const NavWrapper = styled.nav`
  display: flex;
`;

const LinkWrapper = styled.h4`
  margin-right: 1rem;
  ${media.tablet`
    margin-right: 1.5rem;
  `}
  :last-child {
    margin-right: 0rem;
  }
  text-transform: uppercase;
`;

export default () => (
  <NavWrapper>
    <LinkWrapper>
      <InternalLink to="/">
        <strong>Omkar</strong>
      </InternalLink>
    </LinkWrapper>
    <LinkWrapper style={{ marginLeft: "auto" }}>
      <InternalLink to="/posts">
        <strong>Posts</strong>
      </InternalLink>
    </LinkWrapper>
    <LinkWrapper>
      <InternalLink to="/projects">
        <strong>Projects</strong>
      </InternalLink>
    </LinkWrapper>
  </NavWrapper>
);

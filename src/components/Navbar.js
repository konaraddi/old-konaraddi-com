import React from "react";
import InternalLink from "./InternalLink";
import styled from "styled-components";
import media from "../utils/media";

const NavWrapper = styled.nav`
  display: flex;
`;

const LinkWrapper = styled.h3`
  margin-right: 0.75rem;
  ${media.tablet`
    margin-right: 1.5rem;
  `}
  :last-child {
    margin-right: 0rem;
  }
`;

export default () => (
  <NavWrapper>
    <LinkWrapper>
      <InternalLink to="/">O.K.</InternalLink>
    </LinkWrapper>
    <LinkWrapper style={{ marginLeft: "auto" }}>
      <InternalLink to="/posts">Posts</InternalLink>
    </LinkWrapper>
    <LinkWrapper>
      <InternalLink to="/projects">Projects</InternalLink>
    </LinkWrapper>
  </NavWrapper>
);

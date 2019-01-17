import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import media from "../utils/media";

const LayoutWrapper = styled.div`
  margin: 4rem 24px 3rem 24px;
  ${media.desktop`max-width: 1000px; margin: 4rem auto;`}
  ${media.fullhd`max-width: 1200px; margin: 4rem auto;`}
`;

// TODO keep margin left/right at 24px on mobile
export default ({ children, titleText }) => (
  <LayoutWrapper>
    <Navbar />
    <br />
    <h1>{titleText}</h1>
    <br />
    {children}
  </LayoutWrapper>
);

import "typeface-ibm-plex-sans";
import "typeface-ibm-plex-serif";

import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import media from "../utils/media";
import colors from "../utils/colors";

const LayoutWrapper = styled.div`
  margin: 4rem 24px 2rem 24px;
  ${media.desktop`max-width: 1000px; margin: 4rem auto;`}
  ${media.fullhd`max-width: 1200px; margin: 4rem auto;`}
`;

export default ({ children }) => (
  <div>
    <style
      dangerouslySetInnerHTML={{
        __html: `
        html { background-color: ${colors.white} }
        `
      }}
    />
    <LayoutWrapper>
      <Navbar />
      <br />
      {children}
    </LayoutWrapper>
  </div>
);

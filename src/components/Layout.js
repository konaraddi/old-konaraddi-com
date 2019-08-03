import "prismjs/themes/prism.css";

// see src/utils/typography.js for usage
// import "typeface-zilla-slab";
import "typeface-ibm-plex-sans";

import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "./Navbar";
import styled from "styled-components";
import media from "../utils/media";
import colors from "../utils/colors";

const LayoutWrapper = styled.div`
  margin: 4rem 24px 3rem 24px;
  ${media.desktop`max-width: 1000px; margin: 4rem auto;`}
  ${media.fullhd`max-width: 1200px; margin: 4rem auto;`}
`;

export default ({ title, children }) => (
  <div>
    <Helmet>
      <title>{title}</title>
      <meta name="theme-color" content={colors.primary} />
    </Helmet>
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

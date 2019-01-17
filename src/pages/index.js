import React from "react";
import Layout from "../components/Layout";
import ExternalLink from "../components/ExternalLink";
import styled from "styled-components";
import media from "../utils/media";

const Body = styled.div`
  ${media.tablet`max-width: 600px;`}
`;

export default () => (
  <Layout>
    <h1>Omkar Konaraddi</h1>
    <br />
    <Body>
      <p>
        Currently a teaching assistant for CMSC388A <i>Intro. to React</i> and
        CMSC388B <i>Intro. to Node</i> at University of Maryland.
      </p>
      <p>Interested in software, design, and education.</p>
      <p>
        <ExternalLink href="https://github.com/konaraddi">GitHub</ExternalLink>
        &nbsp;&nbsp;&nbsp;
        <ExternalLink href="https://linkedin.com/in/omkar-konaraddi">
          LinkedIn
        </ExternalLink>
      </p>
    </Body>
  </Layout>
);

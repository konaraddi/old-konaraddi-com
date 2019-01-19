import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import { Grid, GridElement } from "../components/Grid";
import ExternalLink from "../components/ExternalLink";

export default function({ data }) {
  return (
    <Layout>
      <h1>Omkar's projects</h1>
      <br />
      <Grid>
        {data.allJson.edges.map(({ node }) => (
          <GridElement key={node.link}>
            <p>
              <ExternalLink href={node.link}>{node.name}</ExternalLink>
              <br />
              {node.description}
            </p>
          </GridElement>
        ))}
      </Grid>
    </Layout>
  );
}

export const query = graphql`
  query {
    allJson {
      edges {
        node {
          name
          link
          description
          tech
        }
      }
    }
  }
`;

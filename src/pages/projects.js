import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import { Grid, GridElement } from "../components/Grid";

export default function({ data }) {
  return (
    <Layout>
      <h1>Omkar's projects</h1>
      <br />
      <Grid>
        {data.allJson.edges.map(({ node }) => (
          <GridElement key={node.link}>
            <p>
              <strong>
                <a href={node.link} target="_blank" rel="noopener noreferrer">
                  {node.name}
                </a>
              </strong>
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

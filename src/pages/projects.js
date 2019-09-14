import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import { Grid, GridElement } from "../components/Grid";

export default function({ data }) {
  return (
    <Layout title="Omkar's projects">
      <p>These are links to some things I made a while ago.</p>
      <br />
      <Grid>
        {data.allProjectsJson.edges.map(({ node }) => (
          <GridElement key={node.link}>
            <p>
              <a href={node.link} target="_blank" rel="noopener noreferrer">
                {node.name}
              </a>{" "}
              - <i>{node.time}</i>
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
    allProjectsJson {
      edges {
        node {
          name
          link
          description
          time
        }
      }
    }
  }
`;

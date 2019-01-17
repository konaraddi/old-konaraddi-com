import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import { Grid, GridElement } from "../components/Grid";

export default function({ data }) {
  return (
    <Layout titleText="Omkar's Projects">
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

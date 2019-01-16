import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";

export default function({ data }) {
  return (
    <Layout>
      <h1>Sometimes I build.</h1>
      <ul>
        {data.allJson.edges.map(({ node }) => (
          <li key={node.link}>
            <a href={node.link} target="_blank" rel="noopener noreferrer">
              {node.name}
            </a>
          </li>
        ))}
      </ul>
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
          show
        }
      }
    }
  }
`;

import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import InternalLink from "../components/InternalLink";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  row-gap: 0.5rem;
  column-gap: 2rem;
`;

const GridElement = styled.div`
  position: relative;
`;

export default ({ data }) => (
  <Layout>
    <h1>Omkar's posts</h1>
    <br />
    <Grid>
      {data.allMarkdownRemark.edges.map(({ node }, index) => (
        <GridElement key={node.id}>
          <small>
            {data.allMarkdownRemark.edges.length - index} &nbsp; &middot; &nbsp; {node.frontmatter.date} &nbsp;
            &middot; &nbsp; #{node.frontmatter.category}
          </small>
          <h3>
            <InternalLink to={node.fields.slug}>
              {node.frontmatter.title}
            </InternalLink>
          </h3>
        </GridElement>
      ))}
    </Grid>
  </Layout>
);

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
            category
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

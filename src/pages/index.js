import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import media from "../utils/media";

const HomePageGrid = styled.div`
  display: grid;
  ${media.desktop`grid-template-columns: minmax(600px, 1fr) 1fr;`}
  row-gap: 0.5rem;
  column-gap: 4rem;
`;

const HomePageGridElement = styled.div`
  position: relative;
`;

export default ({ data }) => (
  <Layout title="Omkar Konaraddi">
    <h1>Hi, I'm Omkar</h1>
    <HomePageGrid>
      <HomePageGridElement>
        <p>
          I'm pursuing a B.S. in Computer Science and co-teaching CMSC389O "The
          Coding Interview" at University of Maryland.
        </p>
        <p>
          Previously I was an intern at my university, Thermo Fisher
          Scientific, Capital One, and Mozilla. The following is a video where I
          talk about what I did during my most recent internship at Mozilla.
        </p>
        <div
          style={{
            overflow: "hidden",
            paddingBottom: "56.25%",
            position: "relative",
            height: 0
          }}
        >
          <iframe
            title="Mozilla Summer 2019 Internship Presentation - Omkar Konaraddi"
            width="560"
            height="315"
            style={{
              left: 0,
              top: 0,
              height: "100%",
              width: "100%",
              position: "absolute"
            }}
            src="https://www.youtube.com/embed/hntkoHEm3uY"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>

        <br />

        <p>
          <a
            href="https://github.com/konaraddi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>GitHub</strong>
          </a>
          &nbsp;&nbsp;&nbsp;
          <strong>
            <a
              href="https://linkedin.com/in/konaraddi"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </strong>
        </p>
      </HomePageGridElement>

      <HomePageGridElement>
        {data.allMarkdownRemark.edges.map(({ node }, index) => (
          <div key={node.id}>
            <small>
              {node.frontmatter.date} &nbsp; &middot; &nbsp;{" "}
              {node.fields.readingTime.text}
            </small>
            <h3 style={{ fontWeight: "normal", lineHeight: 1.3 }}>
              <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
            </h3>
          </div>
        ))}
        <Link to="/posts/">Browse all posts</Link>
      </HomePageGridElement>
    </HomePageGrid>
  </Layout>
);

export const query = graphql`
  query {
    allMarkdownRemark(
      limit: 5
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
          }
          fields {
            slug
            readingTime {
              text
            }
          }
        }
      }
    }
    allProjectsJson(limit: 2) {
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

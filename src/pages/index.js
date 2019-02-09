import { graphql } from "gatsby";
import React from "react";
import InternalLink from "../components/InternalLink";
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
  <Layout>
    <h1>Omkar Konaraddi</h1>
    <br />
    <HomePageGrid>
      <HomePageGridElement>
        <p>
          I'm a student at{" "}
          <a href="https://umd.edu" target="_blank" rel="noopener noreferrer">
            University of Maryland
          </a>{" "}
          (UMD) where I'm pursuing a B.S. in Computer Science. I'm also an
          organizer at{" "}
          <a href="https://bit.camp" target="_blank" rel="noopener noreferrer">
            Bitcamp
          </a>{" "}
          where I'm working on our mobile app for our hackathon attendees in
          April.
        </p>
        <p>
          Previously, I was an intern at Capital One, Thermo Fisher Scientific,
          and UMD. I was a teaching assistant for both <i>Intro. to Node</i> and{" "}
          <i>Intro. to React</i> at UMD.
        </p>
        <p>
          One of my projects turns smartphones into 3D controllers using a web
          app. Check out the demo below.
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
            title="Web Riimote Demo"
            width="560"
            height="315"
            style={{
              left: 0,
              top: 0,
              height: "100%",
              width: "100%",
              position: "absolute"
            }}
            src="https://www.youtube.com/embed/O2r1-lR6Xq8"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>

        <br />

        <p>I'm interested in software, education, and design.</p>
        <p>
          <a
            href="https://github.com/konaraddi"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          &nbsp;&nbsp;&nbsp;
          <a
            href="https://linkedin.com/in/omkar-konaraddi"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </p>
      </HomePageGridElement>

      <HomePageGridElement>
        <h4 style={{ textTransform: "uppercase" }}>Recent posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }, index) => (
          <div key={node.id}>
            <small>
              {node.frontmatter.date} &nbsp; &middot; &nbsp; #
              {node.frontmatter.category}
            </small>
            <h3>
              <InternalLink to={node.fields.slug}>
                {node.frontmatter.title}
              </InternalLink>
            </h3>
          </div>
        ))}
        <h4>
          <InternalLink to="/posts">See all posts →</InternalLink>
        </h4>

        <br />

        <h4 style={{ textTransform: "uppercase" }}>Recent projects</h4>
        {data.allJson.edges.map(({ node }) => (
          <p key={node.link}>
            <a href={node.link} target="_blank" rel="noopener noreferrer">
              <b>{node.name}</b>
            </a>
            <br />
            {node.description}
          </p>
        ))}
        <h4>
          <InternalLink to="/projects">See all projects →</InternalLink>
        </h4>
      </HomePageGridElement>
    </HomePageGrid>
  </Layout>
);

export const query = graphql`
  query {
    allMarkdownRemark(
      limit: 3
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
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
    allJson(limit: 2) {
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

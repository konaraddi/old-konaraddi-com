import React from "react";
import { graphql } from "gatsby";
import InternalLink from "../components/InternalLink";
import Layout from "../components/Layout";
import styled from "styled-components";
import media from "../utils/media";

const Body = styled.div`
  margin-left: auto;
  margin-right: auto;
  ${media.tablet`max-width: 552px;`}
`;

export default ({ data, pageContext }) => {
  const post = data.markdownRemark;
  const previous = pageContext.previous;
  const next = pageContext.next;
  return (
    <Layout title={post.frontmatter.title}>
      <p>
        {post.frontmatter.date} &nbsp; &middot; &nbsp; {post.fields.readingTime.text}
      </p>
      <br />
      <Body>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Body>
      <br />
      <div style={{ display: "flex" }}>
        {previous && (
          <p>
            <InternalLink to={previous.fields.slug} rel="prev">
              ← Older: <i>{previous.frontmatter.title}</i>
            </InternalLink>
          </p>
        )}
        {next && (
          <p style={{ marginLeft: "auto" }}>
            <InternalLink to={next.fields.slug} rel="next">
              Newer: <i>{next.frontmatter.title}</i> →
            </InternalLink>
          </p>
        )}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
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
`;

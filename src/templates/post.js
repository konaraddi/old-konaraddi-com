import React from "react";
import { graphql } from "gatsby";
import InternalLink from "../components/InternalLink";
import Layout from "../components/Layout";
import styled from "styled-components";
import media from "../utils/media";

const Body = styled.div`
  ${media.tablet`max-width: 640px;`}
`;

export default ({ data, pageContext }) => {
  const post = data.markdownRemark;
  const previous = pageContext.previous;
  const next = pageContext.next;
  console.log(pageContext);
  return (
    <Layout titleText={post.frontmatter.title}>
      <Body>
        <p>
          <i>Published on {post.frontmatter.date}.</i>
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />

        {previous && (
          <p>
            <InternalLink to={previous.fields.slug} rel="prev">
              ← {previous.frontmatter.title}
            </InternalLink>
          </p>
        )}
        {next && (
          <p>
            <InternalLink to={next.fields.slug} rel="next">
              {next.frontmatter.title} →
            </InternalLink>
          </p>
        )}
      </Body>
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
      }
    }
  }
`;

/* 
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { graphql, PageProps } from "gatsby";

export default function Blog({ data }: PageProps<Queries.BlogTitlesQuery>) {
  console.log(data);

  return (
    <Layout title="Blog">
      <ul>
        {data.allFile.nodes.map((file, index) => (
          <li key={index}> {file.name} </li>
        ))}
      </ul>
    </Layout>
  );
}

export const query = graphql`
  query BlogTitles {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export function Head() {
  return <Seo title="Blog" />;
}
 */

/////////////////

import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import { graphql, Link, PageProps } from "gatsby";

export default function Blog({ data }: PageProps<Queries.BlogPostsQuery>) {
  console.log(data);

  return (
    <Layout title="Blog">
      <section>
        {data.allMdx.nodes.map((file, index) => (
          <article key={index}>
            <Link to={`/blog/${file.frontmatter?.slug}`}>
              <h3>{file.frontmatter?.title}</h3>
              <h5>
                {file.frontmatter?.author} in: {file.frontmatter?.category}
              </h5>
              <h6>{file.frontmatter?.date}</h6>
              <hr />
              <p>{file.excerpt}</p>
            </Link>
          </article>
        ))}
      </section>
    </Layout>
  );
}

export const query = graphql`
  query BlogPosts {
    allMdx {
      nodes {
        frontmatter {
          slug
          title
          category
          date(formatString: "YYYY.MM.DD")
          author
        }
        excerpt(pruneLength: 50)
      }
    }
  }
`;

export function Head() {
  return <Seo title="Blog" />;
}

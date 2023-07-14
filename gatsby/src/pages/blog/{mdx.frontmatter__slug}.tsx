/*
import Layout from "../../components/Layout";
import React from "react";
import { graphql } from "gatsby";

export default function BlogPost(props: any) {
  console.log(props) // {path: '/blog/hello-everyone/', location: {…}, pageResources: {…}, uri: '/blog/hello-everyone', children: {…}, …}
                    // {path: '/blog/bye-bye-everyone/', location: {…}, pageResources: {…}, uri: '/blog/bye-bye-everyone', children: {…}, …}
  return (
    <Layout title="Blog Post">
      <div />
    </Layout>
  );
} 
*/

///////////////////

/*
import Layout from "../../components/Layout";
import React from "react";
import { graphql } from "gatsby";
import Seo from "../../components/Seo";

interface IBlogPostProps {
  data: Queries.PostDetailQuery;
  children: any;
}

export default function BlogPost({ data, children }: IBlogPostProps) {
  console.log(data); // 'data'에는 graphql의 결과물이 담김.
  return (
    <Layout title="Blog Post">
      <div> {children} </div>
    </Layout>
  );
} // 'children'에는 mdx파일의 내용물이 담김. ( HTML형태의 본문이 됨.)

export const query = graphql`
  query PostDetail($frontmatter__slug: String) {
    mdx(frontmatter: { slug: { eq: $frontmatter__slug } }) {
      body
      frontmatter {
        author
        category
        date
        title
        slug
        }
      }
    }
  }
`;

export const Head = ({ data }: IBlogPostProps) => (
  <Seo title={data.mdx?.frontmatter?.title} />
);
 */

////////////////////

import Layout from "../../components/Layout";
import React from "react";
import { graphql } from "gatsby";
import Seo from "../../components/Seo";
import { getImage } from "gatsby-plugin-image";
import { GatsbyImage } from "gatsby-plugin-image";

interface IBlogPostProps {
  data: any;
  children: any;
}

export default function BlogPost({ data, children }: IBlogPostProps) {
  const image = getImage(
    data.mdx?.frontmatter?.headerImage?.childImageSharp?.gatsbyImageData!
  );

  return (
    <Layout title="Blog Post">
      <GatsbyImage image={image as any} alt={data.mdx?.frontmatter?.title!} />

      <div> {children} </div>
    </Layout>
  );
}

export const query = graphql`
  query PostDetail {
    mdx(frontmatter: {}) {
      frontmatter {
        author
        category
        date
        title
        slug
        headerImage {
          childImageSharp {
            gatsbyImageData(height: 450)
          }
        }
      }
    }
  }
`;

export const Head = ({ data }: IBlogPostProps) => (
  <Seo title={data.mdx?.frontmatter?.title} />
);

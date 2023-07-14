/* import { graphql, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

export default function IndexPage() {
  return (
    <Layout title="Welcome to DevStickers">
      <StaticImage
        height={500}
        src="https://images.unsplash.com/photo-1583225214464-9296029427aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=325&q=80"
        alt="Stickers on the wall"
      />
    </Layout>
  );
} 
*/

///////////////////

import { graphql, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { GatsbyImage } from "gatsby-plugin-image";

export default function IndexPage({ data }: PageProps<Queries.StickersQuery>) {
  return (
    <Layout title="Welcome to DevStickers">
      {data.allContentfulStickerPack.nodes.map((sticker) => (
        <article>
          <GatsbyImage
            image={getImage(sticker.preview?.gatsbyImageData!)!}
            alt={sticker.name}
          />
          <h2>{sticker.name!}</h2>
          <h4>${sticker.price}</h4>
        </article>
      ))}
    </Layout>
  );
}

export const query = graphql`
  query Stickers {
    allContentfulStickerPack {
      nodes {
        name
        price
        preview {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  }
`;

export function Head() {
  return <Seo title="Home" />;
}

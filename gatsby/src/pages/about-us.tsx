import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

export default function AboutUs() {
  return (
    <div>
      <Layout title="About Us">
        <p>We are the happiest sticker store</p>
      </Layout>
    </div>
  );
}

export function Head() {
    return(
      <Seo title="AboutUs" />
    )
  }
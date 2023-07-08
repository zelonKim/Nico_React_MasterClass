import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

export default function IndexPage() {
  return (
    <Layout title="Welcome to DevStickers">
      <div></div>
    </Layout>
  );
}

export function Head() {
  return <Seo title="Home" />;
}

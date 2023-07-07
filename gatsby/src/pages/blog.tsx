import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

export default function Blog() {
  const [blogPosts, setBlogPosts] = useState();
  useEffect(() => {
    fetchBlogPosts();
  }, []);

  return (
    <Layout title="Blog">
      <h1>Hello welcome to my blog</h1>
      {blogPosts}
    </Layout>
  );
}

export function Head() {
  return <Seo title="Blog" />;
}

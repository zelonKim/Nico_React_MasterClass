import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `DevStickerss`,
    siteUrl: `https://www.yourdomain.tld`,
    description: "Buy the best stickers",
  },

  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog-posts`,
      },
    },
  ],
};
export default config;

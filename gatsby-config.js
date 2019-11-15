require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

// import dotenv from 'dotenv';

module.exports = {
  siteMetadata: {
    title: `Alfonso Galang's Portfolio`,
    description: `A portfolio for a modern web developer and designer`,
    author: `Alfonso Galang`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        // projectId,
        // dataset,
        token: process.env.SANITY_TOKEN,
        overlayDrafts: true,
        watchMode: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Alfonso Galang's Portfolio`,
        short_name: `alfonso galang`,
        start_url: `/`,
        background_color: `#4FACFE`,
        theme_color: `#4FACFE`,
        display: `minimal-ui`,
        icon: `src/images/codeicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Nunito", "sans-serif"],
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

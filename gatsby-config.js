module.exports = {
  siteMetadata: {
    title: `Alfonso Galang's Portfolio`,
    description: `A portfolio for a modern web developer and designer`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "2be2la2w",
        dataset: "assets",
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
          families: ["Nunito", "Sans serif"],
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

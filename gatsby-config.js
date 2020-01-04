const {
  backgroundColor,
  googleAnalyticsId,
  pathPrefix: configPath,
  siteDescription,
  siteShortName,
  siteTitle,
  siteUrl,
  themeColor,
  userTwitter,
  name,
  accounts,
  contact,
} = require("./config/website");

const pathPrefix = configPath === "/" ? "" : configPath;

module.exports = {
  pathPrefix: configPath,
  siteMetadata: {
    title: siteTitle,
    description: siteDescription,
    author: userTwitter,
    siteUrl: siteUrl + pathPrefix,
    name,
    accounts,
    contact,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`open sans:300,400,600,700`, `oswald:400`],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-javascript-frontmatter`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteTitle,
        short_name: siteShortName,
        description: siteDescription,
        start_url: configPath,
        // start_url: `/`,
        background_color: backgroundColor,
        theme_color: themeColor,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: googleAnalyticsId,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};

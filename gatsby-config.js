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
    "gatsby-plugin-styled-components",
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `portfolio`,
        path: `${__dirname}/src/portfolio`,
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
        // start_url: `/`,
        start_url: configPath,
        background_color: backgroundColor,
        theme_color: themeColor,
        display: `minimal-ui`,
        icon: `src/images/favicons/mstile-144x144.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: googleAnalyticsId,
      },
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-netlify",
  ],
};

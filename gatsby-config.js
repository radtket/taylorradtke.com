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
} = require("./config/website");

const pathPrefix = configPath === "/" ? "" : configPath;

module.exports = {
  pathPrefix: configPath,
  siteMetadata: {
    title: siteTitle,
    description: siteDescription,
    author: userTwitter,
    siteUrl: siteUrl + pathPrefix,
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`open sans:300,400,600,700`, `oswald:400`],
      },
    },
    `gatsby-plugin-react-helmet`,
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
        name: `articles`,
        path: `${__dirname}/src/articles`,
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
        background_color: backgroundColor,
        theme_color: themeColor,
        display: `minimal-ui`,
        icons: [
          {
            src: "/favicons/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/favicons/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    },
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `black`,
        showSpinner: false,
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

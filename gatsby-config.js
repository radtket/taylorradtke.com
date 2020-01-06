const urljoin = require("url-join");
const {
  accounts,
  backgroundColor,
  contact,
  googleAnalyticsId,
  name,
  pathPrefix,
  siteDescription,
  siteLogo,
  siteShortName,
  siteTitle,
  siteTitleAlt,
  siteUrl,
  themeColor,
  userTwitter,
} = require("./config");

module.exports = {
  pathPrefix,
  siteMetadata: {
    title: siteTitle,
    description: siteDescription,
    author: userTwitter,
    siteUrl: urljoin(siteUrl, pathPrefix),
    name,
    accounts,
    contact,
    siteLogo,
    siteTitleAlt,
    backgroundColor,
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
        start_url: pathPrefix,
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

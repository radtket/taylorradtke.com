require("dotenv").config();
const urljoin = require("url-join");

console.log(
  `Using environment config: '${
    process.env.ACTIVE_ENV || process.env.NODE_ENV
  }'`
);

const {
  accounts,
  backgroundColor,
  contact,
  description,
  name,
  pathPrefix,
  // eslint-disable-next-line camelcase
  short_name,
  siteLogo,
  siteTitle,
  siteUrl,
  themeColor,
  trackingId,
} = require("./config");

module.exports = {
  pathPrefix,
  siteMetadata: {
    accounts,
    author: "@gatsbyjs",
    backgroundColor,
    contact,
    description,
    name,
    siteLogo,
    siteUrl: urljoin(siteUrl, pathPrefix),
    title: siteTitle,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-google-fonts-v2",
      options: {
        fonts: [
          {
            family: "Open Sans",
            weights: ["300", "400", "600", "700"],
          },
          {
            family: "Oswald",
            weights: ["400", "600"],
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "portfolio",
        path: `${__dirname}/src/portfolio`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-transformer-javascript-frontmatter",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: siteTitle,
        // eslint-disable-next-line camelcase
        short_name,
        description,
        start_url: pathPrefix,
        background_color: backgroundColor,
        theme_color: themeColor,
        display: "minimal-ui",
        icon: "src/images/favicons/mstile-144x144.png",
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId,
      },
    },
    {
      resolve: "gatsby-source-github-api",
      options: {
        token: process.env.GATSBY_GITHUB_TOKEN,
        graphQLQuery: `
          query ($github_login: String!) {
            user(login: $github_login) {
              repositories(
                first: 6
                isFork: false
                privacy: PUBLIC
                orderBy: { field: STARGAZERS, direction: DESC }
              ) {
                nodes {
                  description
                  forkCount
                  homepageUrl
                  id
                  name
                  openGraphImageUrl
                  shortDescriptionHTML
                  updatedAt
                  url
                  usesCustomOpenGraphImage
                  stargazers {
                    totalCount
                  }
                  primaryLanguage {
                    name
                    color
                  }
                  readme: object(expression: "master:README.md") {
                    ... on Blob {
                      text
                    }
                  }
                  licenseInfo {
                    id
                  }
                  languages(first: 10) {
                    nodes {
                      name
                    }
                  }
                }
              }
            }
          }
        `,
        // graphQLQuery: `
        //   query ($github_login: String!) {
        //     user(login: $github_login) {
        //       pinnedItems(first: 10) {
        //         nodes {
        //           ... on Repository {
        //             id
        //             name
        //             nameWithOwner
        //             url
        //             homepageUrl
        //             description
        //             shortDescriptionHTML
        //             usesCustomOpenGraphImage
        //             openGraphImageUrl
        //             forkCount
        //             stargazers {
        //               totalCount
        //             }
        //             primaryLanguage {
        //               name
        //               color
        //             }
        //           }
        //         }
        //       }
        //     }
        //   }
        // `,
        variables: {
          github_login: "radtket",
        },
      },
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-netlify",
    "gatsby-plugin-image",
  ],
};

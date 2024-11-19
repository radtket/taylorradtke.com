/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

// eslint-disable-next-line import/no-unused-modules
const lodash = require("lodash");
const urljoin = require("url-join");

const getPagination = (articles, edge) => {
  const index = articles.findIndex(
    a => a.node.frontmatter.path === edge.node.frontmatter.path
  );

  const NEXT_INDEX = index + 1;
  const PREV_INDEX = index - 1;

  return {
    nextArticle: articles[NEXT_INDEX === articles.length ? 0 : NEXT_INDEX],
    prevArticle: articles[PREV_INDEX < 0 ? articles.length - 1 : PREV_INDEX],
  };
};

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      site {
        siteMetadata {
          backgroundColor
          description
          name
          siteLogo
          siteUrl
          title
          accounts {
            twitter {
              account
            }
          }
        }
      }
      allJavascriptFrontmatter(
        filter: { frontmatter: { path: { regex: "/work/" } } }
        sort: { frontmatter: { date: DESC } }
      ) {
        edges {
          node {
            fileAbsolutePath
            frontmatter {
              clientName
              companyUrl
              date
              excerpt
              githubRepoName
              id
              path
              projectBrandColors
              projectName
              projectRole
              projectStack
              thumbnail {
                childImageSharp {
                  fluid(maxWidth: 720, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }

    fragment GatsbyImageSharpFluid_withWebp on ImageSharpFluid {
      base64
      aspectRatio
      src
      srcSet
      srcWebp
      srcSetWebp
      sizes
    }
  `)
    .then(({ data }) => ({
      articles: lodash.get(data, "allJavascriptFrontmatter.edges", []),
      siteMetadata: lodash.get(data, "site.siteMetadata"),
    }))
    .then(({ articles, siteMetadata }) => {
      articles.forEach(edge => {
        const { frontmatter, fileAbsolutePath } = edge.node;

        const {
          accounts: { twitter },
          backgroundColor,
          name,
          siteUrl,
          title: siteTitle,
        } = siteMetadata;

        const title = `${name} |  ${frontmatter.projectName}`;

        const image = frontmatter.thumbnail.childImageSharp.fluid.src;
        const description = frontmatter.description || frontmatter.excerpt;

        createPage({
          path: frontmatter.path,
          component: require.resolve(fileAbsolutePath),
          // component: require.resolve("./src/templates/layout-portfolio.js"),
          context: {
            title,
            frontmatter,
            ...getPagination(articles, edge),
            dude: {
              title,
              description,
              image,
              postURL: urljoin(siteUrl, frontmatter.path),
              SCHEMA_ORG_JSONLD: [
                {
                  "@context": "http://schema.org",
                  "@type": "BreadcrumbList",
                  itemListElement: [
                    {
                      "@type": "ListItem",
                      position: 1,
                      item: {
                        "@id": urljoin(siteUrl, frontmatter.path),
                        name: title,
                        image,
                      },
                    },
                  ],
                },
                {
                  "@context": "http://schema.org",
                  "@type": "BlogPosting",
                  url: siteUrl,
                  name: title,
                  author: {
                    "@type": "Person",
                    name,
                  },
                  publisher: {
                    "@type": "Organization",
                    name: siteTitle,
                    logo: {
                      "@type": "ImageObject",
                      url: `${siteUrl}/branding/logo__primary.png`,
                    },
                  },
                  alternateName: name || "",
                  headline: title,
                  image: {
                    "@type": "ImageObject",
                    url: image,
                  },
                  description,
                },
              ],
            },
          },
          //     defer: true,
        });
      });
    })
    .catch(err => {
      console.log(`createPages Error: ${err}`);
      console.log(`createPages Error Message: ${err.message}`);
    });
};

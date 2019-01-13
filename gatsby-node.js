/* eslint-disable no-console */
const path = require(`path`);

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: `babel-plugin-root-import`
  });
};

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    createPage(page);

    resolve().then(result => {
      if (result.errors) {
        console.log(result.errors);
        reject(result.errors);
      }
    });
  });
};

function getPagination(articles, article) {
  const index = articles.findIndex(
    a => a.node.frontmatter.path === article.node.frontmatter.path
  );

  let nextIndex = index + 1;
  if (nextIndex === articles.length) {
    nextIndex = 0;
  }

  let prevIndex = index - 1;
  if (prevIndex < 0) {
    prevIndex = articles.length - 1;
  }

  const nextArticle = articles[nextIndex];
  const prevArticle = articles[prevIndex];

  return {
    nextArticle,
    prevArticle
  };
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    // Query for all markdown "nodes" and for the slug we previously created.
    resolve(
      graphql(
        `
          {
            allJavascriptFrontmatter(
              filter: { frontmatter: { path: { regex: "/work/" } } }
              sort: { fields: [frontmatter___date], order: DESC }
            ) {
              edges {
                node {
                  fileAbsolutePath
                  frontmatter {
                    cover {
                      childImageSharp {
                        fluid(maxWidth: 1100, quality: 90) {
                          ...GatsbyImageSharpFluid_withWebp
                        }
                      }
                    }
                    clientName
                    companyUrl
                    date
                    excerpt
                    id
                    path
                    projectBrandColors
                    projectRole
                    projectStack
                    title
                    thumbnail {
                      childImageSharp {
                        fluid(maxWidth: 720, quality: 90) {
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
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          console.log(result);
          reject(result.errors);
        }

        const articles = result.data.allJavascriptFrontmatter.edges;

        articles.forEach(edge => {
          const { frontmatter } = edge.node;
          const pagination = getPagination(articles, edge);

          createPage({
            path: frontmatter.path, // required
            component: path.resolve(edge.node.fileAbsolutePath),
            context: {
              frontmatter,
              ...pagination
            }
          });
        });
      })
    );
  });
};

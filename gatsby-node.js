const path = require(`path`);

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    devtool: "eval-source-map",
  });
};

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: `babel-plugin-root-import`,
  });
};

exports.onCreatePage = ({ page, actions: { createPage } }) => {
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

const getPagination = (articles, article) => {
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

  return {
    nextArticle: articles[nextIndex],
    prevArticle: articles[prevIndex],
  };
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allJavascriptFrontmatter(
        filter: { frontmatter: { path: { regex: "/work/" } } }
        sort: { fields: [frontmatter___date], order: DESC }
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
  `).then(result => {
    const articles = result.data.allJavascriptFrontmatter.edges;
    articles.forEach(edge => {
      const { frontmatter } = edge.node;
      const pagination = getPagination(articles, edge);
      createPage({
        path: `${edge.node.frontmatter.path}`,
        component: path.resolve(edge.node.fileAbsolutePath),
        context: {
          frontmatter,
          ...pagination,
        },
      });
    });
  });
};

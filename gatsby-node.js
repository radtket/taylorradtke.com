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
  console.log("createPage:", createPage);
  console.log("page:", page);
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

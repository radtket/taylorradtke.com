/* eslint-disable react/prop-types */
import React from "react";
import Layout from "./Layout";

const LayoutPortfolio = ({
  children,
  pathContext: { frontmatter, nextLayoutPortfolio, prevLayoutPortfolio },
}) => {
  return (
    <Layout>
      <div>{children}</div>
    </Layout>
  );
};

export default LayoutPortfolio;

/* eslint-disable react/prop-types */
import React from "react";
import Layout from "../Layout";
import PortfolioNav from "./PortfolioNav";
import ProjectHero from "./ProjectHero";

const LayoutPortfolio = ({
  children,
  pageContext: {
    frontmatter,
    nextArticle: {
      node: { frontmatter: next },
    },
    prevArticle: {
      node: { frontmatter: prev },
    },
  },
}) => {
  return (
    <Layout>
      <ProjectHero {...frontmatter} />
      <PortfolioNav {...{ next, prev }} />
      {children}
    </Layout>
  );
};

export default LayoutPortfolio;

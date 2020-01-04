/* eslint-disable react/prop-types */
import React from "react";
import Layout from "../Layout";
import PortfolioNav from "./PortfolioNav";
import ProjectHero from "./ProjectHero";

const LayoutPortfolio = ({ children, frontmatter }) => {
  return (
    <Layout>
      <ProjectHero {...frontmatter} />
      <PortfolioNav {...frontmatter} />
      {children}
    </Layout>
  );
};

export default LayoutPortfolio;

import React from "react";
import PropTypes from "prop-types";
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

LayoutPortfolio.propTypes = {
  children: PropTypes.node,
  pageContext: PropTypes.shape({
    frontmatter: PropTypes.shape({
      clientName: PropTypes.string,
      companyUrl: PropTypes.string,
      date: PropTypes.string,
      excerpt: PropTypes.string,
      githubRepoName: PropTypes.string,
      id: PropTypes.string,
      path: PropTypes.string,
      projectBrandColors: PropTypes.arrayOf(PropTypes.string),
      projectName: PropTypes.string,
      projectRole: PropTypes.string,
      projectStack: PropTypes.string,
    }),
    nextArticle: {
      frontmatter: PropTypes.shape({
        projectName: PropTypes.string,
        path: PropTypes.string,
      }),
    },
    prevArticle: {
      frontmatter: PropTypes.shape({
        projectName: PropTypes.string,
        path: PropTypes.string,
      }),
    },
  }).isRequired,
};

LayoutPortfolio.defaultProps = {
  children: null,
};

export default LayoutPortfolio;

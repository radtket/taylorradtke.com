import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import StyledPortfolioNav from "../../styles/Portfolio/PortfolioNav";
import { PaginationPrev, PaginationNext, PaginationHome } from "../Icons";

const PortfolioNav = ({ nextLayoutPortfolio, prevLayoutPortfolio }) => {
  return (
    <StyledPortfolioNav>
      {prevLayoutPortfolio && (
        <Link to={prevLayoutPortfolio.node.frontmatter.path}>
          <PaginationPrev />
          <span style={{ marginLeft: "1rem" }}>
            {prevLayoutPortfolio.node.frontmatter.projectName}
          </span>
        </Link>
      )}

      <Link style={{ textAlign: "center" }} to="/#work">
        <PaginationHome />
        <span style={{ marginLeft: "1rem" }}>All Works</span>
      </Link>

      {nextLayoutPortfolio && (
        <Link
          style={{ textAlign: "right" }}
          to={nextLayoutPortfolio.node.frontmatter.path}
        >
          <span style={{ marginRight: "1rem" }}>
            {nextLayoutPortfolio.node.frontmatter.projectName}
          </span>
          <PaginationNext />
        </Link>
      )}
    </StyledPortfolioNav>
  );
};

PortfolioNav.propTypes = {
  nextLayoutPortfolio: PropTypes.shape({
    node: PropTypes.shape({
      fileAbsolutePath: PropTypes.string,
      frontmatter: PropTypes.shape({
        projectName: PropTypes.string,
        path: PropTypes.string,
      }),
    }),
  }),
  prevLayoutPortfolio: PropTypes.shape({
    node: PropTypes.shape({
      fileAbsolutePath: PropTypes.string,
      frontmatter: PropTypes.shape({
        projectName: PropTypes.string,
        path: PropTypes.string,
      }),
    }),
  }),
};

PortfolioNav.defaultProps = {
  nextLayoutPortfolio: null,
  prevLayoutPortfolio: null,
};

export default PortfolioNav;

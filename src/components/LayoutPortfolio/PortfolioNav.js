import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import StyledPortfolioNav from "../../styles/Portfolio/PortfolioNav";
import { PaginationPrev, PaginationNext, PaginationHome } from "../Icons";

const PortfolioNav = ({ next, prev }) => (
  <StyledPortfolioNav>
    {prev && (
      <Link to={prev.path}>
        <PaginationPrev />
        <span>{prev.projectName}</span>
      </Link>
    )}

    <Link to="/#works">
      <PaginationHome />
      <span>All Works</span>
    </Link>

    {next && (
      <Link to={next.path}>
        <span>{next.projectName}</span>
        <PaginationNext />
      </Link>
    )}
  </StyledPortfolioNav>
);

PortfolioNav.propTypes = {
  next: PropTypes.shape({
    projectName: PropTypes.string,
    path: PropTypes.string,
  }),
  prev: PropTypes.shape({
    projectName: PropTypes.string,
    path: PropTypes.string,
  }),
};

export default PortfolioNav;

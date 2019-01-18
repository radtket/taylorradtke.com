import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { PaginationPrev, PaginationNext, PaginationHome } from "./Icons";

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  justify-items: center;
  background-color: rgba(255, 255, 255, 0.97);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);

  a {
    padding: 0 2.4rem;
    border: 0;
    display: block;
    color: #333;
    width: 33.333%;
    float: left;
    line-height: 55px;
    transition: all 0.2s cubic-bezier(0, 0, 0.58, 1);

    &:hover {
      color: #333;
      background: #c0a062;

      svg {
        fill: #333;
      }
    }

    span {
      display: inline-block;
      vertical-align: middle;
      font-size: 1.2rem;
      font-weight: 600;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    svg {
      display: inline-block;
      vertical-align: middle;
      height: 1.4rem;
    }
  }
`;

const ProjectNav = ({ prev, next }) => (
  <Wrapper>
    {prev && (
      <Link to={prev.node.frontmatter.path}>
        <PaginationPrev />
        <span style={{ marginLeft: "1rem" }}>
          {prev.node.frontmatter.projectName}
        </span>
      </Link>
    )}

    <Link to="/#work" style={{ textAlign: "center" }}>
      <PaginationHome />
      <span style={{ marginLeft: "1rem" }}>All Works</span>
    </Link>

    {next && (
      <Link to={next.node.frontmatter.path} style={{ textAlign: "right" }}>
        <span style={{ marginRight: "1rem" }}>
          {next.node.frontmatter.projectName}
        </span>
        <PaginationNext />
      </Link>
    )}
  </Wrapper>
);

export default ProjectNav;

ProjectNav.propTypes = {
  next: PropTypes.shape({
    node: PropTypes.shape({
      fileAbsolutePath: PropTypes.string,
      frontmatter: PropTypes.shape({
        clientName: PropTypes.string,
        path: PropTypes.string
      })
    })
  }),
  prev: PropTypes.shape({
    node: PropTypes.shape({
      fileAbsolutePath: PropTypes.string,
      frontmatter: PropTypes.shape({
        clientName: PropTypes.string,
        path: PropTypes.string
      })
    })
  })
};

ProjectNav.defaultProps = {
  next: null,
  prev: null
};

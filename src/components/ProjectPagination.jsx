/* eslint-disable react/forbid-prop-types */
import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import Post from "./Post";

const ProjectPagination = ({ prev, next }) => (
  <nav className="pagination">
    <header>
      <h2>Browse more work</h2>
      <Link to="/#work">View all</Link>
    </header>

    <ul>
      <li>
        <Post post={prev} />
      </li>
      <li>
        <Post post={next} />
      </li>
    </ul>
  </nav>
);

export default ProjectPagination;

ProjectPagination.propTypes = {
	next: PropTypes.object,
	prev: PropTypes.object
};

ProjectPagination.defaultProps = {
	next: null,
	prev: null
};

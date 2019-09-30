import React from "react";
import PropTypes from "prop-types";
import Post from "./Post";

const Posts = ({ posts }) => (
  <div className="posts" id="work">
    {posts.reduce((all, one) => {
      if (one.node.path !== "/404/") {
        all.push(<Post key={one.node.frontmatter.path} post={one} />);
      }
      return all;
    }, [])}
  </div>
);

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        frontmatter: PropTypes.shape({
          projectName: PropTypes.string,
          devOnly: PropTypes.bool,
          path: PropTypes.string,
        }),
      }),
    })
  ).isRequired,
};

export default Posts;

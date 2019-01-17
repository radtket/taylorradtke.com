import React, { Component } from "react";
import PropTypes from "prop-types";
import Post from "./Post";

class Posts extends Component {
  split = items => {
    const col1 = [];
    const col2 = [];

    items.forEach((item, i) => {
      if (i % 2 !== 0) {
        col1.push(item);
      } else {
        col2.push(item);
      }
    });

    return (
      <div className="grid">
        <div className="col">{col1}</div>
        <div className="col">{col2}</div>
      </div>
    );
  };

  preparePosts = posts => {
    const nodes = [];

    posts.forEach(post => {
      if (post.node.path !== "/404/") {
        nodes.push(<Post key={post.node.frontmatter.path} post={post} />);
      }
    });

    return this.split(nodes);
  };

  render() {
    const { posts } = this.props;
    return (
      <div id="work" className="posts">
        {this.preparePosts(posts)}
      </div>
    );
  }
}

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        frontmatter: PropTypes.shape({
          projectName: PropTypes.string,
          devOnly: PropTypes.bool,
          path: PropTypes.string
        })
      })
    })
  ).isRequired
};

export default Posts;

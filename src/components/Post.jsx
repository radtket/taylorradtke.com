import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import PropTypes from "prop-types";

const Post = ({ post }) => {
	const { clientName, cover, devOnly, path } = post.node.frontmatter;
	const { fluid } = cover.childImageSharp;
	return (
  <div className="post" key={path}>
    <Link to={path}>
      <div className="cover">
        <h2>{clientName}</h2>
        {cover && <Img fluid={fluid} />}
      </div>
      {devOnly ? <div className="dev-only">Dev Only</div> : null}
    </Link>
  </div>
	);
};

export default Post;

Post.propTypes = {
	post: PropTypes.shape({
		node: PropTypes.shape({
			fileAbsolutePath: PropTypes.string,
			frontmatter: PropTypes.shape({
				clientName: PropTypes.string,
				cover: PropTypes.string,
				devOnly: PropTypes.bool,
				path: PropTypes.string
			})
		})
	}).isRequired
};

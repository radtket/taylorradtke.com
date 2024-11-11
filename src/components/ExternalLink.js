import React from "react";
import PropTypes from "prop-types";

const ExternalLink = ({ href, children, ...props }) => (
  <a {...{ ...props, href }} rel="noopener noreferrer" target="_blank">
    {children}
  </a>
);

ExternalLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ExternalLink;

import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { ScreenReaderText } from "../styles/Shared";
import { CodePen, GitHub, Twitter, LinkedIn, Instagram } from "./Icons";

const SocialMediaIcon = ({ href, name }) => {
  const Icon = useMemo(() => {
    switch (name) {
      case "github":
        return <GitHub />;
      case "codepen":
        return <CodePen />;
      case "twitter":
        return <Twitter />;
      case "linkedin":
        return <LinkedIn />;
      case "instagram":
        return <Instagram />;
      default:
        return null;
    }
  }, [name]);

  return (
    <a
      {...{ href }}
      rel="external nofollow noopener noreferrer"
      target="_blank"
    >
      <ScreenReaderText>{name}</ScreenReaderText>
      {Icon}
    </a>
  );
};

SocialMediaIcon.propTypes = {
  href: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default SocialMediaIcon;

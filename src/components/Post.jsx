import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import IconZoom from "../assets/icons/icon__zoom.png";

const ProjectText = styled.figcaption`
  bottom: 0;
  left: 0;
  margin: 1.2rem;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
`;

const ProjectName = styled.h3`
  color: #ffffff;
  font-size: 2.4rem;
  left: 0;
  letter-spacing: 0.1em;
  margin: 0 auto;
  max-width: 80%;
  position: relative;
  text-transform: uppercase;
  top: 0;
  transition: all 0.5s;
`;

const ProjectType = styled.p`
  bottom: 0;
  color: #dddddd;
  font-family: "Oswald", sans-serif;
  font-size: 1.2rem;
  left: 0;
  letter-spacing: 0.3em;
  margin: 0 0 -0.8em;
  position: absolute;
  text-transform: uppercase;
  transform: rotate(-90deg);
  transform-origin: 0 0;
  transition: all 0.5s;
`;

const ZoomIcon = styled.span`
  background-color: rgba(192, 160, 98, 0.85);
  border-radius: 50%;
  height: 33.3333%;
  left: 50%;
  margin: -16.66665%;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  top: 50%;
  transform: scale(0.5);
  transition: all 0.7s;
  width: 33.3333%;

  &::after {
    background: url(${IconZoom}) 0 0 no-repeat;
    background-size: cover;
    content: "";
    height: 25%;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 25%;
  }
`;

const Project = styled(Link)`
  display: inline-block;
  /* float: left; */
  margin: 0;
  max-width: 300px;
  overflow: hidden;
  padding: 0;
  position: relative;
  vertical-align: top;
  width: calc(33.3333333333%);

  @media only screen and (max-width: 800px) {
    max-width: 360px;
    width: 50%;
  }

  @media only screen and (max-width: 500px) {
    float: none;
    width: 100%;
  }

  &:hover {
    .gatsby-image-wrapper {
      &::after {
        background-color: #101010;
        opacity: 0.1;
      }
      img {
        transform: scale(1.4);
      }
    }

    ${ProjectName} {
      opacity: 0;
      top: 2.4rem;
    }

    ${ProjectType} {
      letter-spacing: 0.75em;
      opacity: 0;
    }

    ${ZoomIcon} {
      opacity: 1;
      transform: scale(1);
    }
  }

  .gatsby-image-wrapper {
    outline: none;
    overflow: hidden;
    position: relative;

    &::after {
      background-color: #101010;
      content: "";
      height: 100%;
      left: 0;
      opacity: 0.7;
      position: absolute;
      top: 0;
      transition: all 0.5s;
      width: 100%;
    }

    img {
      display: block;
      transition: all 8s linear !important;
      width: 100%;
    }
  }
`;

const Post = ({ post }) => {
  const { clientName, cover, devOnly, path, thumbnail } = post.node.frontmatter;
  const { fluid } = thumbnail.childImageSharp;
  return (
    <Project to={path} className="works--item" key={path}>
      {thumbnail && <Img fluid={fluid} />}
      <ProjectText>
        <ProjectName>{clientName}</ProjectName>
        <ProjectType>Website</ProjectType>
        <ZoomIcon />
      </ProjectText>
      {devOnly ? <div className="dev-only">Dev Only</div> : null}
    </Project>
  );
};

export default Post;

Post.propTypes = {
  post: PropTypes.shape({
    node: PropTypes.shape({
      fileAbsolutePath: PropTypes.string,
      frontmatter: PropTypes.shape({
        clientName: PropTypes.string,
        cover: PropTypes.object,
        devOnly: PropTypes.bool,
        path: PropTypes.string,
        thumbnail: PropTypes.object
      })
    })
  }).isRequired
};

import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { media } from "../../../config/Breakpoints";

const SectionDescription = ({ sectionName, sectionNumber }) => (
  <Description>
    <SectionName>{sectionName}</SectionName>
    <SectionNumber>{`0${sectionNumber}`}</SectionNumber>
  </Description>
);

SectionDescription.propTypes = {
  sectionName: PropTypes.string,
  sectionNumber: PropTypes.string
};

SectionDescription.defaultProps = {
  sectionName: "",
  sectionNumber: ""
};

export default SectionDescription;

const Description = styled.aside`
  width: calc(100% - 4.8rem);
  float: left;
  margin-left: 24px;
  margin-left: 2.4rem;
  position: relative;

  ${media.desktop`
    width: calc(25% - 3rem);
  `};
`;

const SectionName = styled.h2`
  color: #101010;
  display: inline-block;
  font-size: 30px;
  font-size: 3rem;
  letter-spacing: 0.1em;
  margin-bottom: 60px;
  margin-bottom: 6rem;
  position: relative;
  text-transform: uppercase;
  z-index: 1;

  &::after {
    background-color: #c0a062;
    content: "";
    height: 2px;
    position: absolute;
    right: 0;
    top: 0;
    width: 20px;
    width: 2rem;
  }
`;

const SectionNumber = styled.span`
  color: rgba(51, 51, 51, 0.1);
  display: block;
  font-size: 60px;
  font-size: 6rem;
  font-weight: 700;
  left: -15px;
  left: -1.5rem;
  opacity: 0.75;
  position: absolute;
  top: 0;
  z-index: 0;
`;

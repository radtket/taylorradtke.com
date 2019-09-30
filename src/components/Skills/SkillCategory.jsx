import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { CheckMark } from "../Icons";
import { media } from "../../../config/Breakpoints";
import { HeadlineSecondary } from "../../styles/SharedStyles";

const SkillCategory = ({ SkillHeadline, skillSet }) => (
  <>
    <HeadlineSecondary>{SkillHeadline}</HeadlineSecondary>
    <SkillsList>
      {skillSet.map(skill => (
        <ListItem key={skill}>
          <CheckMark />
          <span>{skill}</span>
        </ListItem>
      ))}
    </SkillsList>
  </>
);

SkillCategory.propTypes = {
  SkillHeadline: PropTypes.string,
  skillSet: PropTypes.arrayOf(PropTypes.string),
};

SkillCategory.defaultProps = {
  SkillHeadline: "",
  skillSet: [""],
};

export default SkillCategory;

const SkillsList = styled.ul`
  margin-bottom: 2.4rem;
  display: block;

  &::after {
    clear: both;
    content: "";
    display: block;
  }
`;

const ListItem = styled.li`
  color: #666;
  font-family: Oswald, sans-serif;
  font-size: 1.4rem;
  letter-spacing: 0.1em;
  margin-bottom: 1.2rem;
  text-transform: uppercase;
  line-height: 1;
  position: relative;
  vertical-align: middle;
  height: 18px;

  ${media.phoneLg`
    width: 50%;
    float: left;
  `};

  ${media.navbreak`
    width: 33.33333%;
  `};

  span {
    display: inline-block;
    vertical-align: middle;
  }

  svg {
    display: inline-block;
    vertical-align: middle;
    height: 16px;
    margin-right: 1rem;
  }
`;

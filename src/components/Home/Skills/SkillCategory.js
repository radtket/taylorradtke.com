import React from "react";
import PropTypes from "prop-types";
import { HeadlineSecondary } from "../../../styles/Shared";
import {
  StyledSkillsList,
  StyledSkillsListItem,
} from "../../../styles/Home/Skills";
import { CheckMark } from "../../Icons";

const SkillCategory = ({ title, skills }) => (
  <>
    <HeadlineSecondary>{title}</HeadlineSecondary>
    <StyledSkillsList>
      {skills.map(key => (
        <StyledSkillsListItem {...{ key }}>
          <CheckMark />
          <span>{key}</span>
        </StyledSkillsListItem>
      ))}
    </StyledSkillsList>
  </>
);

SkillCategory.propTypes = {
  title: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SkillCategory;

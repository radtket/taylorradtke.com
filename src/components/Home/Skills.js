import React, { Fragment } from "react";
import { SKILL_LIST } from "../../utils/constants";
import { HeadlineSecondary } from "../../styles/Shared";
import {
  StyledSkillsList,
  StyledSkillsListItem,
} from "../../styles/Home/Skills";
import { CheckMark } from "../Icons";

const Skills = () =>
  Object.entries(SKILL_LIST).map(([title, skills]) => (
    <Fragment key={title}>
      <HeadlineSecondary>{title}</HeadlineSecondary>
      <StyledSkillsList>
        {skills.map(key => (
          <StyledSkillsListItem {...{ key }}>
            <CheckMark />
            <span>{key}</span>
          </StyledSkillsListItem>
        ))}
      </StyledSkillsList>
    </Fragment>
  ));

export default Skills;

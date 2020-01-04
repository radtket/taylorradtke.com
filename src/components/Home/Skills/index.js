import React from "react";
import SkillCategory from "./SkillCategory";
import { SKILL_LIST } from "../../../utils/constants";

const Skills = () =>
  Object.entries(SKILL_LIST).map(([key, skills]) => (
    <SkillCategory {...{ key, title: key, skills }} />
  ));

export default Skills;

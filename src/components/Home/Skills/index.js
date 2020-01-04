import React from "react";
import PageSection from "../../PageSection";
import SkillCategory from "./SkillCategory";
import { SKILL_LIST } from "../../../utils/constants";

const Skills = () => {
  return (
    <PageSection sectionName="Skills" sectionNumber="1">
      {Object.entries(SKILL_LIST).map(([key, skills]) => (
        <SkillCategory {...{ key, title: key, skills }} />
      ))}
    </PageSection>
  );
};

export default Skills;

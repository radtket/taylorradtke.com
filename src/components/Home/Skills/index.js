import React from "react";
import PageSection from "../../PageSection";
import SkillCategory from "./SkillCategory";
import { skillsList } from "../../../utils/constants";

const Skills = () => {
  return (
    <PageSection sectionName="Skills" sectionNumber="1">
      {Object.entries(skillsList).map(([key, skills]) => (
        <SkillCategory {...{ key, title: key, skills }} />
      ))}
    </PageSection>
  );
};

export default Skills;

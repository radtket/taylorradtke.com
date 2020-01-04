import React from "react";
import PageSection from "../../PageSection";
import { StyledJobTimeline } from "../../../styles/Home/Experience";
import { JOB_LIST } from "../../../utils/constants";
import Job from "./Job";

const Experience = () => {
  return (
    <PageSection sectionName="Experience" sectionNumber="2">
      <StyledJobTimeline>
        {JOB_LIST.map(item => (
          <Job key={item.company} {...item} />
        ))}
      </StyledJobTimeline>
    </PageSection>
  );
};

export default Experience;

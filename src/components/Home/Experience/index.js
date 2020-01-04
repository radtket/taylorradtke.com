import React from "react";
import { StyledJobTimeline } from "../../../styles/Home/Experience";
import { JOB_LIST } from "../../../utils/constants";
import Job from "./Job";

const Experience = () => {
  return (
    <StyledJobTimeline>
      {JOB_LIST.map(item => (
        <Job key={item.company} {...item} />
      ))}
    </StyledJobTimeline>
  );
};

export default Experience;

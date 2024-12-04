import React from "react";
import {
  StyledJobTimeline,
  StyledJob,
  StyledJobCompany,
  StyledJobDescription,
  StyledJobDetails,
  StyledJobLocation,
  StyledJobPosition,
  StyledJobTimeFrame,
  StyledJobWrap,
  StyledTimeLineDot,
} from "../../styles/Home/Experience";
import { JOB_LIST } from "../../utils/constants";
import ExternalLink from "../ExternalLink";
import { createKey } from "../../utils/helpers";

const Experience = () => (
  <StyledJobTimeline>
    {JOB_LIST.map(
      ({
        start,
        end,
        company,
        companyUrl,
        position,
        location,
        desc: Description,
      }) => (
        <StyledJob key={createKey([company, companyUrl])}>
          <StyledTimeLineDot />
          <StyledJobWrap>
            <StyledJobDetails>
              <StyledJobTimeFrame>{`${start} – ${end}`}</StyledJobTimeFrame>
              <StyledJobCompany>
                <ExternalLink href={companyUrl} title={`${company} Website`}>
                  {company}
                </ExternalLink>
              </StyledJobCompany>
              <StyledJobPosition>{position}</StyledJobPosition>
              <StyledJobLocation>{location}</StyledJobLocation>
            </StyledJobDetails>
            <StyledJobDescription>
              <Description />
            </StyledJobDescription>
          </StyledJobWrap>
        </StyledJob>
      )
    )}
  </StyledJobTimeline>
);

export default Experience;

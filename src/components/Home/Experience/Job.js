import React from "react";
import PropTypes from "prop-types";
import {
  StyledJob,
  StyledJobCompany,
  StyledJobDescription,
  StyledJobDetails,
  StyledJobLocation,
  StyledJobPosition,
  StyledJobTimeFrame,
  StyledJobWrap,
  StyledTimeLineDot,
} from "../../../styles/Home/Experience";
import ExternalLink from "../../ExternalLink";

const Job = ({ start, end, company, companyUrl, position, location, desc }) => {
  return (
    <StyledJob>
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
        <StyledJobDescription>{desc}</StyledJobDescription>
      </StyledJobWrap>
    </StyledJob>
  );
};

Job.propTypes = {
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  companyUrl: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default Job;

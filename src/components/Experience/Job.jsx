import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { media } from "../../../config/Breakpoints";

const Job = ({ start, end, company, companyUrl, position, location, desc }) => (
  <div style={{ position: "relative" }}>
    <TimeLineDot />
    <JobWrap>
      <JobDetails>
        <JobTimeFrame>{`${start} – ${end}`}</JobTimeFrame>
        <JobCompany>
          <a
            href={companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            title={`${company} Website`}
          >
            {company}
          </a>
        </JobCompany>
        <JobPosition>{position}</JobPosition>
        <JobLocation>{location}</JobLocation>
      </JobDetails>
      <JobDescription>{desc}</JobDescription>
    </JobWrap>
  </div>
);

export default Job;

Job.propTypes = {
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  companyUrl: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired
};

const TimeLineDot = styled.div`
  background: #c0a062;
  border-radius: 50%;
  box-shadow: 0 0 0 6px #ffffff;
  height: 1rem;
  left: -3.1rem;
  position: absolute;
  top: 0.3rem;
  width: 1rem;
`;

const JobWrap = styled.div`
  padding-bottom: 4.8rem;

  ${media.desktop`
		display: flex;
		flex-flow: row wrap;
		margin-right: -4.8rem;
		position: relative;
	`};
`;

const JobDetails = styled.ul`
  ${media.desktop`
		flex-basis: 40%;
		flex-grow: 1;
		flex-shrink: 0;
		overflow: hidden;
		padding-right: 4.8rem;
	`};
`;

const JobTimeFrame = styled.li`
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #c0a062;
`;

const JobCompany = styled.li`
  font-size: 20px;
  font-size: 2rem;

  > a {
    color: #101010;

    &:hover {
      color: #c0a062;
    }
  }
`;

const JobPosition = styled.li`
  color: #666;
`;

const JobLocation = styled.li`
  color: #999;
  font-size: 1.2rem;
`;

const JobDescription = styled.p`
  ${media.desktop`
		flex-basis: 60%;
		flex-grow: 1;
		flex-shrink: 0;
		overflow: hidden;
		padding-right: 4.8rem;
	`};
`;

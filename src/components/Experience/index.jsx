import React from "react";
import styled from "@emotion/styled";
import Job from "./Job";

const Experience = () => (
  <JobTimeline>
    <Job
      start="July 2018"
      end="Present"
      company="Cisco"
      companyUrl="https://www.cisco.com/"
      position="Engineer"
      location="Herndon, VA"
      desc=""
    />
    <Job
      start="Oct 2016"
      end="July 2018"
      company="AAPA"
      companyUrl="https://www.aapa.org/"
      position="Full-Stack Web Developer"
      location="Alexandria, VA"
      desc="Finished a complete website redesign in under 4 months, on a new CMS. Developed web-site mock-ups for clients
					to ensure quality control and client satisfaction before project development phase. Lead Designer and
					Developer for Annual Conference Site."
    />
    <Job
      start="Apr 2016"
      end="Oct 2016"
      company="The Motley Fool"
      companyUrl="https://www.fool.com/"
      position="Front-End Web Developer"
      location="Alexandria, VA"
      desc="Developed and Designed Microsites, Newsletters. Developed and Designed, and Email Templates. UX tests to test the usability of mobile or websites."
    />
    <Job
      start="Nov 2015"
      end="Apr 2016"
      company="Total Wine & More"
      companyUrl="https://www.totalwine.com/"
      position="Digital Media Designer"
      location="Bethesda, MD"
      desc="Responsible for designing and maintaining web banners in various formats to be displayed on any device, that were analyzed using Google Analytics and Google AdWords."
    />
  </JobTimeline>
);

export default Experience;

const JobTimeline = styled.div`
  border-left: 0.125rem solid;
  margin-left: calc(1rem - 0.125rem);
  padding-left: 2.4rem;
  position: relative;
`;

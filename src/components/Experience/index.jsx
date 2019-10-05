import React from "react";
import styled from "styled-components";
import Job from "./Job";

const Experience = () => (
  <JobTimeline>
    <Job
      company="Booz Allen Hamilton"
      companyUrl="https://www.boozallen.com/"
      desc="Looking for design-driven development, both mobile and web.
      The preferred tech stack is ES6, React, Node, GraphQL. Writing scalable, non-repetitive code, reusable code."
      end="Present"
      location="McLean, VA"
      position="Developer"
      start="Apr 2019"
    />
    <Job
      company="Cisco"
      companyUrl="https://www.cisco.com/"
      desc="Created a completely dynamic Wordpress Theme used by hundreds of different partners that brands all pages and components with their personal branding (Typography, brand colors, logo, etc)"
      end="Apr 2019"
      location="Herndon, VA"
      position="Engineer"
      start="July 2018"
    />
    <Job
      company="AAPA"
      companyUrl="https://www.aapa.org/"
      desc="Finished a complete website redesign in under 4 months, on a new CMS. Developed web-site mock-ups for clients
					to ensure quality control and client satisfaction before project development phase. Lead Designer and
					Developer for Annual Conference Site."
      end="July 2018"
      location="Alexandria, VA"
      position="Full-Stack Web Developer"
      start="Oct 2016"
    />
    <Job
      company="The Motley Fool"
      companyUrl="https://www.fool.com/"
      desc="Developed and Designed Microsites, Newsletters. Developed and Designed, and Email Templates. UX tests to test the usability of mobile or websites."
      end="Oct 2016"
      location="Alexandria, VA"
      position="Front-End Web Developer"
      start="Apr 2016"
    />
    <Job
      company="Total Wine & More"
      companyUrl="https://www.totalwine.com/"
      desc="Responsible for designing and maintaining web banners in various formats to be displayed on any device, that were analyzed using Google Analytics and Google AdWords."
      end="Apr 2016"
      location="Bethesda, MD"
      position="Digital Media Designer"
      start="Nov 2015"
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

import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { media } from "../../../config/Breakpoints";
import SectionDescription from "./SectionDescription";
import { Container, Section } from "../../styles/SharedStyles";
import BrowserMockup from "../../styles/BrowserMockup";

const PageSection = ({ sectionName, sectionNumber, sectionContent }) => (
  <Section id={sectionName.toLowerCase()}>
    <Container>
      <SectionDescription
        sectionName={sectionName}
        sectionNumber={sectionNumber}
      />
      <SectionContent>{sectionContent}</SectionContent>
    </Container>
  </Section>
);

PageSection.propTypes = {
  sectionName: PropTypes.string,
  sectionNumber: PropTypes.string,
};

PageSection.defaultProps = {
  sectionName: "",
  sectionNumber: "",
};

export default PageSection;

const SectionContent = styled.article`
  width: calc(100% - 4.8rem);
  float: left;
  margin-left: 24px;
  margin-left: 2.4rem;

  ${media.desktop`
		width: calc(75% - 4.2rem);
  `};

  ${BrowserMockup} {
    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

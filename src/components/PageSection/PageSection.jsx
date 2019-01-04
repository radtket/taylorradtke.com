import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { media } from "../../../config/Breakpoints";
import SectionDescription from "./SectionDescription";
import { Container, Section } from "../../styles/SharedStyles";

const PageSection = ({ sectionName, sectionNumber, sectionContent }) => (
  <Section id={sectionName.toLowerCase()}>
    <Container>
      <SectionDescription secName={sectionName} secNumber={sectionNumber} />
      <SectionContent>{sectionContent}</SectionContent>
    </Container>
  </Section>
);

PageSection.propTypes = {
  sectionName: PropTypes.string,
  sectionNumber: PropTypes.number
};

PageSection.defaultProps = {
  sectionName: "",
  sectionNumber: 0
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
`;

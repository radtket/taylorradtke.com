import React from "react";
import PropTypes from "prop-types";
import { StyledContainer } from "../styles/Shared";
import {
  StyledSection,
  StyledSectionContent,
  StyledSectionDescription,
  StyledSectionName,
  StyledSectionNumber,
} from "../styles/Section";
import { slugify } from "../utils/helpers";

const PageSection = ({ name, index, id, children }) => (
  <StyledSection id={id || slugify(name)}>
    <StyledContainer>
      <StyledSectionDescription>
        <StyledSectionName>{name}</StyledSectionName>
        <StyledSectionNumber>{`0${index + 1}`}</StyledSectionNumber>
      </StyledSectionDescription>
      <StyledSectionContent>{children}</StyledSectionContent>
    </StyledContainer>
  </StyledSection>
);

PageSection.propTypes = {
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
};

PageSection.defaultProps = {
  id: null,
};

export default PageSection;

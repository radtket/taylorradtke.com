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

const PageSection = ({ name, index, children }) => {
  return (
    <StyledSection id={slugify(name)}>
      <StyledContainer>
        <StyledSectionDescription>
          <StyledSectionName>{name}</StyledSectionName>
          <StyledSectionNumber>{`0${index + 1}`}</StyledSectionNumber>
        </StyledSectionDescription>
        <StyledSectionContent>{children}</StyledSectionContent>
      </StyledContainer>
    </StyledSection>
  );
};

PageSection.propTypes = {
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};

export default PageSection;

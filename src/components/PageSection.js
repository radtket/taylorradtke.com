import React from "react";

import { StyledContainer } from "../styles/Shared";
import {
  StyledSection,
  StyledSectionContent,
  StyledSectionDescription,
  StyledSectionName,
  StyledSectionNumber,
} from "../styles/Section";
import { slugify } from "../utils/helpers";

const PageSection = ({ sectionName, sectionNumber, children }) => {
  return (
    <StyledSection id={slugify(sectionName)}>
      <StyledContainer>
        <StyledSectionDescription>
          <StyledSectionName>{sectionName}</StyledSectionName>
          <StyledSectionNumber>{`0${sectionNumber}`}</StyledSectionNumber>
        </StyledSectionDescription>
        <StyledSectionContent>{children}</StyledSectionContent>
      </StyledContainer>
    </StyledSection>
  );
};

export default PageSection;

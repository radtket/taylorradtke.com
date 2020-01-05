import styled from "styled-components";
import { clearFix } from "polished";
import { StyledSection } from "./Section";

export const ScreenReaderTextCSS = `
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;

export const ScreenReaderText = styled.span`
  ${ScreenReaderTextCSS}
`;

// Typography
export const HeadlineSecondary = styled.section`
  font-family: "Oswald", sans-serif;
  font-size: 2rem;
  letter-spacing: 0.3rem;
  margin-bottom: 1.2rem;
  text-transform: uppercase;
`;

// Containers
export const StyledContainer = styled.div`
  margin: auto;
  max-width: 1200px;
  padding: 0 12px;
  width: 100%;
  ${clearFix()}

  ${StyledSection} {
    &:last-child {
      border-bottom: 0;
    }
  }
`;

export const StyledContainerFull = styled.div`
  margin: 0 auto;
  max-width: 100%;
  padding: 0 12px;
  position: relative;
  width: 100%;
  ${clearFix()}

  ${StyledSection} {
    &:last-child {
      border-bottom: 0;
    }
  }
`;

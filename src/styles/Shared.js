import styled from "styled-components";
import { clearFix, padding } from "polished";
import { StyledSection } from "./Section";
import { useSpacing } from "./utils";

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
  margin-bottom: ${useSpacing(1.5)};
  text-transform: uppercase;
`;

// Containers
export const StyledContainer = styled.div`
  ${clearFix()};
  ${padding(0, useSpacing(1.5))};
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;

  ${StyledSection} {
    &:last-child {
      border-bottom: 0;
    }
  }
`;

export const StyledContainerFull = styled(StyledContainer)`
  max-width: 100%;
  position: relative;
`;

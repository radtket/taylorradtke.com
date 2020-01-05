import styled from "styled-components";
import { padding } from "polished";
import { media, hex2rgba } from "./utils";
import StyledBrowserMockup from "./Portfolio/BrowserMockup";

export const StyledSection = styled.section`
  background-attachment: fixed;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey[500]};
  box-sizing: border-box;
  display: block;
  overflow: hidden;
  padding: 140px 0;
  position: relative;
  width: 100%;

  @media only screen and (max-width: 1024px) {
    ${padding("120px", null)};
  }

  @media only screen and (max-width: 768px) {
    ${padding("80px", null)};
  }

  @media only screen and (max-width: 480px) {
    ${padding("60px", null)};
  }
`;

export const StyledSectionContent = styled.article`
  width: calc(100% - 4.8rem);
  float: left;
  margin-left: 2.4rem;

  ${media.desktop`
		width: calc(75% - 4.2rem);
  `};

  ${StyledBrowserMockup} {
    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

export const StyledSectionDescription = styled.aside`
  float: left;
  margin-left: 24px;
  position: relative;
  width: calc(100% - 4.8rem);

  ${media.desktop`
    width: calc(25% - 3rem);
  `};
`;

export const StyledSectionName = styled.h2`
  color: ${({ theme }) => theme.colors.grey[600]};
  display: inline-block;
  font-size: 3rem;
  letter-spacing: 0.1em;
  margin-bottom: 6rem;
  position: relative;
  text-transform: uppercase;
  z-index: 1;

  &::after {
    background-color: ${({ theme }) => theme.colors.primary.main};
    content: "";
    height: 2px;
    position: absolute;
    right: 0;
    top: 0;
    width: 2rem;
  }
`;

export const StyledSectionNumber = styled.span`
  color: ${({ theme }) => hex2rgba(theme.colors.grey[100], 0.1)};
  display: block;
  font-size: 6rem;
  font-weight: 700;
  left: -1.5rem;
  opacity: 0.75;
  position: absolute;
  top: 0;
  z-index: 0;
`;

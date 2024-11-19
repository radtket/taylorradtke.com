import styled from "styled-components";
import { Link } from "gatsby";
import { cover, margin, position, size } from "polished";
import IconZoom from "../../assets/icons/icon__zoom.png";
import { hex2rgba, getSpacing } from "../utils";

export const StyledWorkCardText = styled.figcaption`
  ${cover()};
  ${margin(getSpacing(1.5))};
  z-index: 1;
`;

export const StyledWorkCardName = styled.h3`
  ${position("relative", 0, null, null, 0)};
  color: ${({ theme }) => theme.colors.common.white};
  font-size: 2.4rem;
  letter-spacing: 0.1em;
  margin: 0 auto;
  max-width: 80%;
  text-transform: uppercase;
  transition: all 0.5s;
`;

export const StyledWorkCardType = styled.p`
  ${position("absolute", null, null, 0, 0)};
  color: ${({ theme }) => theme.colors.grey[500]};
  font-family: ${({ theme }) => theme.font.family.secondary};
  font-size: 1.2rem;
  letter-spacing: 0.3em;
  margin: 0 0 -0.8em;
  text-transform: uppercase;
  transform: rotate(-90deg);
  transform-origin: 0 0;
  transition: all 0.5s;
`;

export const StyledZoomIcon = styled.span`
  ${size("33.3333%")};
  background-color: ${({ theme }) => hex2rgba(theme.colors.primary.main, 0.85)};
  border-radius: 50%;
  margin: -16.66665%;
  opacity: 0;
  overflow: hidden;
  transform: scale(0.5);
  transition: all 0.7s;

  &::after {
    ${position("absolute", "50%", null, null, "50%")};
    ${size("25%")};
    background: url(${IconZoom}) 0 0 no-repeat;
    background-size: cover;
    content: "";
    transform: translate(-50%, -50%);
  }
`;

export const StyledWorkCard = styled(Link)`
  /* float: left; */
  display: inline-block;
  margin: 0;
  max-width: 300px;
  overflow: hidden;
  padding: 0;
  position: relative;
  vertical-align: top;
  width: calc(33.3333333333%);

  @media only screen and (max-width: 800px) {
    max-width: 360px;
    width: 50%;
  }

  @media only screen and (max-width: 500px) {
    float: none;
    width: 100%;
  }

  &:hover {
    .gatsby-image-wrapper {
      &::after {
        background-color: ${({ theme }) => theme.colors.grey[600]};
        opacity: 0.1;
      }
      img {
        transform: scale(1.4);
      }
    }

    ${StyledWorkCardName} {
      opacity: 0;
      top: ${getSpacing(3)};
    }

    ${StyledWorkCardType} {
      letter-spacing: 0.75em;
      opacity: 0;
    }

    ${StyledZoomIcon} {
      opacity: 1;
      transform: scale(1);
    }
  }

  .gatsby-image-wrapper {
    outline: none;
    overflow: hidden;
    position: relative;

    &::after {
      ${position("absolute", 0, null, null, 0)};
      ${size("100%")};
      background-color: ${({ theme }) => theme.colors.grey[600]};
      content: "";
      opacity: 0.7;
      transition: all 0.5s;
    }

    img {
      display: block;
      transition: all 8s linear !important;
      width: 100%;
    }
  }
`;

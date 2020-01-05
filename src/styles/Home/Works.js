import styled from "styled-components";
import { Link } from "gatsby";
import IconZoom from "../../assets/icons/icon__zoom.png";
import { hex2rgba } from "../utils";

export const StyledWorkCardText = styled.figcaption`
  bottom: 0;
  left: 0;
  margin: 1.2rem;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
`;

export const StyledWorkCardName = styled.h3`
  color: ${({ theme }) => theme.colors.common.white};
  font-size: 2.4rem;
  left: 0;
  letter-spacing: 0.1em;
  margin: 0 auto;
  max-width: 80%;
  position: relative;
  text-transform: uppercase;
  top: 0;
  transition: all 0.5s;
`;

export const StyledWorkCardType = styled.p`
  bottom: 0;
  color: ${({ theme }) => theme.colors.grey[500]};
  font-family: "Oswald", sans-serif;
  font-size: 1.2rem;
  left: 0;
  letter-spacing: 0.3em;
  margin: 0 0 -0.8em;
  position: absolute;
  text-transform: uppercase;
  transform: rotate(-90deg);
  transform-origin: 0 0;
  transition: all 0.5s;
`;

export const StyledZoomIcon = styled.span`
  background-color: ${({ theme }) => hex2rgba(theme.colors.primary.main, 0.85)};
  border-radius: 50%;
  height: 33.3333%;
  left: 50%;
  margin: -16.66665%;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  top: 50%;
  transform: scale(0.5);
  transition: all 0.7s;
  width: 33.3333%;

  &::after {
    background: url(${IconZoom}) 0 0 no-repeat;
    background-size: cover;
    content: "";
    height: 25%;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 25%;
  }
`;

export const StyledWorkCard = styled(Link)`
  display: inline-block;
  /* float: left; */
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
      top: 2.4rem;
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
      background-color: ${({ theme }) => theme.colors.grey[600]};
      content: "";
      height: 100%;
      left: 0;
      opacity: 0.7;
      position: absolute;
      top: 0;
      transition: all 0.5s;
      width: 100%;
    }

    img {
      display: block;
      transition: all 8s linear !important;
      width: 100%;
    }
  }
`;

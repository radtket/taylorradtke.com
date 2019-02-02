import React from "react";
import styled from "styled-components";

import { mediaMax } from "../../../config/Breakpoints";
import { ScreenReaderText } from "../../styles/SharedStyles";

const HamburgerWrap = styled.button`
  background-color: transparent;
  border: 0;
  color: inherit;
  cursor: pointer;
  display: none;
  float: right;
  font: inherit;
  height: 55px;
  margin: 0;
  overflow: visible;
  padding: 0;
  text-transform: none;
  transition-duration: 0.15s;
  transition-property: opacity, filter;
  transition-timing-function: linear;
  width: 55px;

  ${mediaMax.tablet`
    align-items: center;
    display: block;
    justify-content: center;
	`};

  &:hover {
    opacity: 0.7;
  }
`;

const HamburgerBox = styled.span`
  display: block;
  height: 24px;
  margin: auto;
  position: relative;
  width: 35px;
`;

const HamburgerBar = styled.span`
  bottom: 0;
  display: block;
  margin-top: -2px;
  transition-delay: 0.13s;
  transition-duration: 0.13s;
  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);

  &,
  &::before,
  &::after {
    background-color: #333333;
    height: 4px;
    position: absolute;
    transition-property: transform;
    width: 35px;
  }

  &::before,
  &::after {
    content: "";
    display: block;
  }

  &::before {
    top: -10px;
    transition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
      transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  &::after {
    bottom: -10px;
    top: -20px;
    transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
      opacity 0.1s linear;
  }

  .menu-open & {
    transform: translate3d(0, -10px, 0) rotate(-45deg);
    transition-delay: 0.22s;
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);

    &::after {
      opacity: 0;
      top: 0;
      transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
        opacity 0.1s 0.22s linear;
    }

    &::before {
      top: 0;
      transform: rotate(-90deg);
      transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
        transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
    }
  }
`;

const Hamburger = ({ handleMouseDown }) => (
  <HamburgerWrap
    className="hamburger"
    type="button"
    role="button"
    onMouseDown={handleMouseDown}
  >
    <HamburgerBox className="hamburger__box">
      <ScreenReaderText>Menu</ScreenReaderText>
      <HamburgerBar className="hamburger__inner" />
    </HamburgerBox>
  </HamburgerWrap>
);

export default Hamburger;

import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { ArrowLeft, ArrowRight } from "./Icons";

export const SliderNextArrow = ({ className, style, onClick }) => (
  <SlickArrow className={className} style={{ ...style }} onClick={onClick}>
    <ArrowRight />
  </SlickArrow>
);

export const SliderPrevArrow = ({ className, style, onClick }) => (
  <SlickArrow className={className} style={{ ...style }} onClick={onClick}>
    <ArrowLeft />
  </SlickArrow>
);

SliderNextArrow.propTypes = {
  className: PropTypes.string
};

SliderPrevArrow.propTypes = {
  className: PropTypes.string
};

SliderNextArrow.defaultProps = {
  className: ""
};

SliderPrevArrow.defaultProps = {
  className: ""
};

const SlickArrow = styled.button`
  background: transparent;
  border-radius: 2px;
  border: 1px solid #333;
  cursor: pointer;
  display: block;
  font-size: 0;
  height: 24px;
  line-height: 0;
  outline: 0;
  padding: 0;
  position: absolute;
  text-align: center;
  top: 50%;
  transform: translate(0, -50%);
  width: 24px;

  &:hover {
    background: #333;
    color: transparent;
    outline: none;

    svg {
      opacity: 1;
      fill: #fff;
    }
  }

  &:focus {
    color: transparent;
    outline: none;
  }

  &.slick-disabled svg {
    opacity: 0.25;
  }

  svg {
    opacity: 0.75;
    transition: inherit;
    height: 50%;
    fill: #010101;
  }

  &.slick-prev {
    left: -24px;
  }

  &.slick-next {
    right: -24px;
  }
`;

import React from "react";
import PropTypes from "prop-types";
import { ArrowLeft, ArrowRight } from "./Icons";
import { ScreenReaderText } from "../styles/Shared";
import { StyledSliderArrow } from "../styles/Sliders";

const SliderArrow = ({ isNext = false, ...props }) => (
  <StyledSliderArrow role="button" {...props} type="button">
    <ScreenReaderText>{isNext ? "Next" : "Previous"}</ScreenReaderText>
    {isNext ? <ArrowRight /> : <ArrowLeft />}
  </StyledSliderArrow>
);

SliderArrow.propTypes = {
  isNext: PropTypes.bool,
};

export default SliderArrow;

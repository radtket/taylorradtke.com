import React from "react";
import PropTypes from "prop-types";
import {
  StyledHamburger,
  StyledHamburgerWrap,
  StyledHamburgerBar,
} from "../../styles/Navbar";
import { ScreenReaderText } from "../../styles/Shared";

const Hamburger = ({ onClick }) => {
  return (
    <StyledHamburger {...{ onClick }} role="button" type="button">
      <StyledHamburgerWrap>
        <ScreenReaderText>Toggle Menu</ScreenReaderText>
        <StyledHamburgerBar />
      </StyledHamburgerWrap>
    </StyledHamburger>
  );
};

Hamburger.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Hamburger;

import React from "react";
import { StyledNavbarLogo } from "../../styles/Navbar";
import { ScreenReaderText } from "../../styles/Shared";
import { BrandingLogo } from "../Branding";

const Logo = () => (
  <StyledNavbarLogo to="/">
    <ScreenReaderText>Taylor Radtke</ScreenReaderText>
    <BrandingLogo />
  </StyledNavbarLogo>
);

export default Logo;

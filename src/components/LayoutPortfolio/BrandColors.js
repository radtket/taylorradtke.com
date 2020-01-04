import React from "react";
import PropTypes from "prop-types";
import {
  StyledBrandColors,
  StyledBrandColorWrap,
  StyledBrandColorColor,
  StyledBrandColorText,
  StyledBrandLogo,
} from "../../styles/Portfolio/BrandColors";

const BrandColors = ({ projectBrandColors, clientName, logo, ...props }) => {
  console.log({ props, clientName });
  return (
    <>
      <StyledBrandLogo>{logo}</StyledBrandLogo>
      <StyledBrandColors>
        {projectBrandColors.map(item => (
          <StyledBrandColorWrap key={`${clientName} ${item}`}>
            <StyledBrandColorColor style={{ background: `${item}` }} />
            <StyledBrandColorText>{item}</StyledBrandColorText>
          </StyledBrandColorWrap>
        ))}
      </StyledBrandColors>
    </>
  );
};

BrandColors.propTypes = {
  clientName: PropTypes.string.isRequired,
  projectBrandColors: PropTypes.arrayOf(PropTypes.string).isRequired,
  logo: PropTypes.element.isRequired,
};

export default BrandColors;

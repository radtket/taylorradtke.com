import React, { useMemo } from "react";
import PropTypes from "prop-types";
import {
  StyledBrandColors,
  StyledBrandColorWrap,
  StyledBrandColorColor,
  StyledBrandColorText,
  StyledBrandLogo,
} from "../../styles/Portfolio/BrandColors";
import {
  LogoAapa,
  LogoAapaConference,
  LogoGreenCanLockers,
  LogoRandS,
} from "../ClientLogos";

const BrandColors = ({ projectBrandColors, clientName, id }) => {
  const Logo = useMemo(() => {
    switch (id) {
      case "aapaconference":
        return LogoAapaConference;

      case "greencanlockers":
        return LogoGreenCanLockers;

      case "yourpacan":
        return LogoAapa;

      case "randssupply":
        return LogoRandS;

      default:
        return () => null;
    }
  }, [id]);

  return (
    <>
      <StyledBrandLogo>
        <Logo />
      </StyledBrandLogo>
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
  id: PropTypes.string.isRequired,
  projectBrandColors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default BrandColors;

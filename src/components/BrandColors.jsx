import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const Wrap = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 460px;
  padding-bottom: 3rem;
  padding-top: 3rem;
  text-align: center;

  &::after {
    clear: both;
    content: "";
    display: block;
  }
`;

const BrandColorWrap = styled.figure`
  flex: 1 1 25%;
  margin: 0.75rem;
  max-width: 100px;
`;

const BrandColorColor = styled.div`
  border-radius: 100%;
  box-shadow: 0 0 0 0.375rem #333;
  display: inline-block;
  padding-bottom: 100%;
  width: 100%;
`;

const BrandColorText = styled.p`
  border-radius: 100px;
  border: 1px solid rgba(5, 5, 5, 0.2);
  color: #757575;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.05rem;
  line-height: 1.75;
  margin-bottom: 0.75rem;
  margin-top: 0.75rem;
  padding: 2px 1.2rem;
  text-transform: uppercase;
`;

const BrandLogo = styled.figure`
  margin-left: auto;
  margin-right: auto;
  max-width: 460px;
  padding-bottom: 6rem;
`;

const BrandColors = ({ brandingColors, clientName, logo }) => (
  <div>
    <BrandLogo>{logo}</BrandLogo>
    <Wrap>
      {brandingColors.map(item => (
        <BrandColorWrap key={`${clientName} ${item}`}>
          <BrandColorColor style={{ background: `${item}` }} />
          <BrandColorText>{item}</BrandColorText>
        </BrandColorWrap>
      ))}
    </Wrap>
  </div>
);

BrandColors.propTypes = {
  clientName: PropTypes.string.isRequired,
  brandingColors: PropTypes.arrayOf(PropTypes.string).isRequired,
  logo: PropTypes.element.isRequired
};

export default BrandColors;

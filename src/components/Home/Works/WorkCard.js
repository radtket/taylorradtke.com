import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import {
  StyledWorkCard,
  StyledWorkCardText,
  StyledWorkCardName,
  StyledWorkCardType,
  StyledZoomIcon,
} from "../../../styles/Home/Works";

const WorkCard = ({ path, projectName, thumbnail }) => (
  <StyledWorkCard to={path}>
    {thumbnail && <Img {...thumbnail.childImageSharp} />}
    <StyledWorkCardText>
      <StyledWorkCardName>{projectName}</StyledWorkCardName>
      <StyledWorkCardType>Website</StyledWorkCardType>
      <StyledZoomIcon />
    </StyledWorkCardText>
  </StyledWorkCard>
);

WorkCard.propTypes = {
  path: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
  thumbnail: PropTypes.shape({
    childImageSharp: PropTypes.shape({
      fluid: PropTypes.shape({}),
    }),
  }),
};

WorkCard.defaultProps = {
  thumbnail: null,
};

export default WorkCard;

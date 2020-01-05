import React from "react";
import PropTypes from "prop-types";
import {
  StyledFooter,
  StyledSocialList,
  StyledCopyright,
} from "../styles/Footer";
import { StyledContainerFull } from "../styles/Shared";
import SocialMediaIcon from "./SocialMediaIcon";

const Footer = ({ name, accounts }) => {
  return (
    <StyledFooter>
      <StyledContainerFull>
        <StyledCopyright>
          {`© ${new Date().getFullYear()} `}
          <span>{name}</span>, All Rights Reserved.
        </StyledCopyright>
        <StyledSocialList>
          {Object.entries(accounts).map(([key, href]) => {
            return (
              <li {...{ key }}>
                <SocialMediaIcon {...{ href, name: key }} />
              </li>
            );
          })}
        </StyledSocialList>
      </StyledContainerFull>
    </StyledFooter>
  );
};

Footer.propTypes = {
  name: PropTypes.string.isRequired,
  accounts: PropTypes.shape({
    twitter: PropTypes.string,
    instagram: PropTypes.string,
    linkedin: PropTypes.string,
    codepen: PropTypes.string,
    github: PropTypes.string,
  }).isRequired,
};

export default Footer;

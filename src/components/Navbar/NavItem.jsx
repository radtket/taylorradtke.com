import React from "react";
import { Link } from "react-scroll";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

import { media, mediaMax } from "../../../config/Breakpoints";
import theme from "../../../config/theme";
import resumeIcon from "../../../static/icons/icon__resume-download.svg";

const NavListItem = styled.li`
  display: block;
  line-height: 35px;

  ${mediaMax.tablet`
		overflow: hidden;
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
	`};

  ${media.tablet`
		display: inline-block;
		line-height: 55px;
	`};
`;

const LinkStyles = `
  display: inherit;
  color: #333;
  padding: 0 16px;
  transition: all 0.2s cubic-bezier(0, 0, 0.58, 1);
  font-family: ${theme.fonts.oswald};
  font-size: 12px;
  letter-spacing: 0.3em;
  text-transform: uppercase;

  appearance: none;
  background-color: transparent;
  border-color: transparent;
  box-shadow: none;
  cursor: pointer;
  display: inline-block;
  -webkit-font-smoothing: antialiased;
  outline: 0;
  text-align: center;
  text-decoration: none;
  touch-action: manipulation;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;

  &:hover,
  &.active {
    color: #c0a062;
  }
`;

const NavLink = styled(Link)`
  ${LinkStyles}

  ${mediaMax.tablet`
		color: #fff;

		&:hover {
			background: rgba(16, 16, 16, 0.9);
			color: #c0a062;
		}
	`}

  ${media.navbreak`
		padding-left: 2.4rem;
		padding-right: 2.4rem;
  `};
`;

const DownloadButton = styled.a`
  ${LinkStyles}

  ${mediaMax.tablet`
		color: #fff;

		&:hover {
			background: rgba(16, 16, 16, 0.9);
			color: #c0a062;
		}
	`}

  ${media.navbreak`
    background: #333;
    border: 2px solid transparent;
    border-radius: 2.4rem;
    color: #fff;
    font-family: "Open Sans", sans-serif;
    font-weight: 600;
    letter-spacing: 0.1em;
    line-height: 1;
    padding: 1.2rem 2.4rem;

    &:hover {
      background: #222;
    }

    &::before {
      background-position: center center!important;
      background-repeat: no-repeat!important;
      background-size: contain!important;
      background: url(${resumeIcon});
      content: "";
      display: block;
      float: left;
      height: 1.2rem;
      margin-right: .6rem;
      transition: all .2s cubic-bezier(0,0,.58,1);
      width: 1.6rem;
    }
  `};
`;

export const NavItemButton = ({ download, text }) => (
  <NavListItem>
    <DownloadButton href={download} download>
      {text}
    </DownloadButton>
  </NavListItem>
);

export const NavItem = ({ to, text }) => (
  <NavListItem>
    <NavLink
      to={to}
      activeClass="active"
      spy
      smooth
      offset={-55}
      duration={500}
    >
      {text}
    </NavLink>
  </NavListItem>
);

NavItem.propTypes = {
  to: PropTypes.string,
  text: PropTypes.string
};

NavItemButton.propTypes = {
  download: PropTypes.string,
  text: PropTypes.string
};

NavItem.defaultProps = {
  to: "#",
  text: ""
};

NavItemButton.defaultProps = {
  download: "",
  text: ""
};

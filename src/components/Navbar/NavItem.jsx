import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

import { media, mediaMax } from "../../../config/Breakpoints";
import theme from "../../../config/theme";

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

const NavLink = styled(Link)`
	display: inherit;
	color: #333;
	padding: 0 16px;
	transition: all 0.2s cubic-bezier(0, 0, 0.58, 1);
	font-family: ${theme.fonts.oswald};
	font-size: 12px;
	letter-spacing: 0.3em;
	text-transform: uppercase;

	&:hover {
		color: #c0a062;
	}

	${mediaMax.tablet`
		color: #fff;
		text-align: right;

		&:hover {
			background: rgba(16, 16, 16, 0.9);
			color: #c0a062;
		}
	`}

	${media.navbreak`
		padding-left: 24px;
		padding-right: 24px;
  `};
`;

const NavItem = ({ to, text }) => (
  <NavListItem>
    <NavLink to={to}>{text}</NavLink>
  </NavListItem>
);

export default NavItem;

NavItem.propTypes = {
	to: PropTypes.string,
	text: PropTypes.string
};

NavItem.defaultProps = {
	to: "#",
	text: ""
};

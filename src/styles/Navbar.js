import styled from "styled-components";
import { Link } from "gatsby";
import { media, mediaMax } from "./utils";
import theme from "../../config/theme";

export const StyledNavbar = styled.header`
  background-color: rgba(255, 255, 255, 0.97);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;
`;

export const StyledNavbarLogo = styled(Link)`
  float: left;
  height: 55px;
  line-height: 55px;
  text-align: center;
  width: 55px;

  svg {
    display: block;
    fill: #333;
    height: 100%;
    margin: auto;
    max-width: 65%;
  }
`;

export const StyledNav = styled.nav`
  float: right;

  ${mediaMax.tablet`
    background: rgba(16, 16, 16, 0.97);
    display: none;
    left: 0;
    overflow-y: hidden;
    position: absolute;
		top: 100%;
		width: 100%;

		.menu-open & {
      display: block;
    }

    > ul {
      text-align: right;
    }
		`}

  ${media.tablet`
		float: right;
	`}

	> ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;

export const StyledHamburger = styled.button`
  background-color: transparent;
  border: 0;
  color: inherit;
  cursor: pointer;
  display: none;
  float: right;
  font: inherit;
  height: 55px;
  margin: 0;
  overflow: visible;
  padding: 0;
  text-transform: none;
  transition-duration: 0.15s;
  transition-property: opacity, filter;
  transition-timing-function: linear;
  width: 55px;

  ${mediaMax.tablet`
    align-items: center;
    display: block;
    justify-content: center;
	`};

  &:hover {
    opacity: 0.7;
  }
`;

export const StyledHamburgerWrap = styled.span`
  display: block;
  height: 24px;
  margin: auto;
  position: relative;
  width: 35px;
`;

export const StyledHamburgerBar = styled.span`
  bottom: 0;
  display: block;
  margin-top: -2px;
  transition-delay: 0.13s;
  transition-duration: 0.13s;
  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);

  &,
  &::before,
  &::after {
    background-color: #333333;
    height: 4px;
    position: absolute;
    transition-property: transform;
    width: 35px;
  }

  &::before,
  &::after {
    content: "";
    display: block;
  }

  &::before {
    top: -10px;
    transition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
      transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  &::after {
    bottom: -10px;
    top: -20px;
    transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
      opacity 0.1s linear;
  }

  .menu-open & {
    transform: translate3d(0, -10px, 0) rotate(-45deg);
    transition-delay: 0.22s;
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);

    &::after {
      opacity: 0;
      top: 0;
      transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
        opacity 0.1s 0.22s linear;
    }

    &::before {
      top: 0;
      transform: rotate(-90deg);
      transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
        transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
    }
  }
`;

export const StyledNavItem = styled.li`
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

export const StyledNavLink = styled(Link)`
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

export const StyledDownloadButton = styled.a`
  ${LinkStyles}

  ${mediaMax.tablet`
		color: #fff;

		&:hover {
			background: rgba(16, 16, 16, 0.9);
			color: #c0a062;
		}
	`}

  ${media.tablet`
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

    svg {
      height: 1.2rem;
      position: relative;
      top: 1px;
      margin-right: 0.6rem;
      fill: #fff;
    }
  `};
`;

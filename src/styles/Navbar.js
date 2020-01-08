import styled from "styled-components";
import { Link } from "gatsby";
import { position, size, padding } from "polished";
import { media, mediaMax, useSpacing } from "./utils";

export const StyledNavbar = styled.header`
  ${position("fixed", 0, null, null, 0)};
  background-color: ${({ theme }) => theme.colors.shadows.white[97]};
  box-shadow: 0 1px 1px ${({ theme }) => theme.colors.shadows.black[10]};
  width: 100%;
  z-index: ${({ theme }) => theme.zIndex.navbar};
`;

export const StyledNavbarLogo = styled(Link)`
  ${({ theme }) => size(theme.sizes.navigation.height)};
  float: left;
  line-height: ${({ theme }) => theme.sizes.navigation.height};
  text-align: center;

  svg {
    display: block;
    fill: ${({ theme }) => theme.colors.grey[100]};
    height: 100%;
    margin: auto;
    max-width: 65%;
  }
`;

export const StyledNav = styled.nav`
  float: right;

  ${mediaMax.tablet`
  ${position("absolute", "100%", null, null, 0)};
    background: ${({ theme }) => theme.colors.shadows.dark[97]};
    display: none;
    overflow-y: hidden;
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
    margin: 0;
    padding: 0;
  }
`;

export const StyledHamburger = styled.button`
  ${({ theme }) => size(theme.sizes.navigation.height)};
  background-color: transparent;
  border: 0;
  color: inherit;
  cursor: pointer;
  display: none;
  float: right;
  font: inherit;
  margin: 0;
  overflow: visible;
  padding: 0;
  text-transform: none;
  transition-duration: 0.15s;
  transition-property: opacity, filter;
  transition-timing-function: linear;

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
  ${size("24px", "35px")};
  display: block;
  margin: auto;
  position: relative;
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
    ${size("4px", "35px")};
    background-color: ${({ theme }) => theme.colors.grey[100]};
    position: absolute;
    transition-property: transform;
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

const LinkStyles = `
  display: inherit;
  padding: 0 16px;
  transition: all 0.2s cubic-bezier(0, 0, 0.58, 1);
  font-size: 1.2rem;
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
`;

export const StyledNavLink = styled.button`
  ${LinkStyles}
  color: ${({ theme }) => theme.colors.grey[100]};
  font-family: ${({ theme }) => theme.font.family.secondary};

  &:hover {
    color: ${({ theme }) => theme.colors.primary.main};
  }

  ${mediaMax.tablet`
		color: ${({ theme }) => theme.colors.common.white};

		&:hover {
			background: ${({ theme }) => theme.colors.shadows.dark[90]};
			color: ${({ theme }) => theme.colors.primary.main};
		}
	`}

  ${media.navbreak`
    ${padding(null, useSpacing(3))}
  `};
`;

export const StyledNavItem = styled.li`
  display: block;
  line-height: 35px;

  &.is-active {
    ${StyledNavLink} {
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }

  ${mediaMax.tablet`
		overflow: hidden;
		border-bottom: 1px solid ${({ theme }) => theme.colors.shadows.white[10]};
	`};

  ${media.tablet`
		display: inline-block;
		line-height: ${({ theme }) => theme.sizes.navigation.height};
	`};
`;

export const StyledDownloadButton = styled.a`
  ${LinkStyles}
  color: ${({ theme }) => theme.colors.grey[100]};
  font-family: ${({ theme }) => theme.font.family.secondary};

  &:hover {
    color: ${({ theme }) => theme.colors.primary.main};

    svg {
      fill: ${({ theme }) => theme.colors.primary.main};
    }
  }


  ${mediaMax.tablet`
		color: ${({ theme }) => theme.colors.common.white};

		&:hover {
			background: ${({ theme }) => theme.colors.shadows.dark[90]};
			color: ${({ theme }) => theme.colors.primary.main};
		}
	`}

  ${media.tablet`
  ${padding(useSpacing(1.5), useSpacing(3))};
    background: ${({ theme }) => theme.colors.grey[100]};
    border: 2px solid transparent;
    border-radius: ${useSpacing(3)};
    color: ${({ theme }) => theme.colors.common.white};
    font-family:  ${({ theme }) => theme.font.family.primary};
    font-weight: 600;
    letter-spacing: 0.1em;
    line-height: 1;

    &:hover {
      background: ${({ theme }) => theme.colors.grey[400]};
    }
  `};

  svg {
    fill: ${({ theme }) => theme.colors.common.white};
    ${position("relative", "1px", null, null)};
    height: ${useSpacing(1.5)};
    margin-right: ${useSpacing(0.75)};
    transition: fill 0.2s cubic-bezier(0, 0, 0.58, 1);
  }
`;

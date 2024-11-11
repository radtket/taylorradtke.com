import React from "react";
import styled, { keyframes } from "styled-components";
import { clearFix, size, position, margin, padding } from "polished";
import { media, mediaMax, getSpacing } from "../utils";
import { StyledContainer } from "../Shared";
import ExternalLink from "../../components/ExternalLink";

export const StyledProjectHero = styled.section`
  background-attachment: fixed;
  background-color: ${({ theme }) => theme.colors.grey[700]};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: block;
  overflow: hidden;
  position: relative;
  width: 100%;

  &::before {
    ${size("100%")};
    ${position("absolute", 0, null, null, 0)};
    background: ${({ theme }) => theme.colors.shadows.dark[50]};
    content: "";
    z-index: 1;
  }

  ${mediaMax.tablet`
    /* Navbar Offset */
    padding-top: ${({ theme }) => theme.sizes.navigation.height};
	`};

  ${mediaMax.giant`
		background-attachment: scroll;
	`};
`;

export const StyledProjectHeroContainer = styled(StyledContainer)`
  ${size("100vh", "100%")};
  min-height: 600px;
`;

export const StyledProjectHeroTable = styled.div`
  ${size("100%")};
  display: table;
  position: relative;
  z-index: 2;
`;

export const StyledProjectHeroTableCell = styled.div`
  display: table-cell;
  height: 100%;
  vertical-align: middle;
`;

export const StyledProjectHeroTitle = styled.h1`
  color: ${({ theme }) => theme.colors.common.white};
  font-size: 6rem;
  line-height: 1;
  margin-bottom: ${getSpacing(0.75)};
  text-transform: uppercase;

  ${media.phoneLg`
		font-size: 10rem;
		margin-bottom: ${getSpacing(3)};
	`};

  ${media.tablet`
		font-size: 14rem;
	`};

  span {
    color: ${({ theme }) => theme.colors.grey[200]};
    font-family: ${({ theme }) => theme.font.family.secondary};
    font-size: 2rem;
    letter-spacing: 0.3rem;
    margin-top: ${getSpacing(0.75)};
    text-transform: uppercase;
    display: block;

    ${media.phoneLg`
      display: inline;
      margin-bottom: ${getSpacing(1.25)};
      padding-left: ${getSpacing(0.75)};
      margin-top: 0;
    `};
  }
`;

export const StyledProjectHeroWrap = styled.div`
  ${clearFix()};
  overflow: hidden;
  position: relative;

  hr {
    ${margin(getSpacing(1.5), 0)};
    border-top: 2px solid ${({ theme }) => theme.colors.primary.main};
    border: 0;
    display: block;
    height: 2px;
    overflow: visible;
    padding: 0;

    ${media.phoneLg`
			width: ${getSpacing(9)};
			float: left;
		`};
  }
`;

export const StyledProjectHeroBody = styled.article`
  ${media.phoneLg`
		margin-left: ${getSpacing(6)};
		float: left;
		width: 71%;
	`};
`;

export const StyledProjectHeroBodyDesc = styled.p`
  color: ${({ theme }) => theme.colors.grey[200]};
  margin-bottom: ${getSpacing(3)};
  line-height: 1.5;
  font-size: 1.8rem;

  ${media.phoneLg`
		font-size: ${getSpacing(3)};
	`};
`;

export const StyledProjectHeroBodyRole = styled.p`
  color: ${({ theme }) => theme.colors.common.white};
  margin-bottom: ${getSpacing(0.75)};
  font-size: ${getSpacing(1.25)};
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

export const StyledProjectHeroBodyRoleDesc = styled.h3`
  color: #828282;
  font-family: ${({ theme }) => theme.font.family.primary};
  letter-spacing: 0.05rem;
  line-height: 1.2;
  margin-bottom: ${getSpacing(1.25)};
  text-transform: none;
`;

export const StyledProjectHeroBodyMeta = styled.ul`
  ${clearFix()};
`;

export const StyledProjectHeroBodyMetaItem = styled.li`
  margin-bottom: ${getSpacing(3)};

  ${media.phoneLg`
    float: left;
    margin-bottom: ${getSpacing(1.25)};
    margin-left: ${getSpacing(3)};
    width: calc(50% - 3.6rem);

    &:first-of-type {
      margin-left: 0;
    }
	`};
`;

export const StyledProjectHeroVideo = styled.video`
  overflow: hidden;
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const StyledProjectHeroButton = styled(ExternalLink)`
  ${padding(getSpacing(1), getSpacing(2))}
  appearance: none;
  background: ${({ theme }) => theme.colors.primary.main};
  border-radius: 3px;
  border: 0;
  color: #050505;
  cursor: pointer;
  display: block;
  font-size: 1.6rem;
  font-weight: 700;
  -webkit-font-smoothing: antialiased;
  height: 48px;
  letter-spacing: 1;
  line-height: 50px;
  margin: 0 auto ${getSpacing(1.25)};
  max-width: 240px;
  overflow: hidden;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.52s ease 0s;
  user-select: none;
  white-space: nowrap;

  ${media.phone`
    display: inline-block;
    vertical-align: middle;
    margin-bottom: ${getSpacing(1)};
    width: 160px;

    &:first-of-type {
      margin-right: ${getSpacing(1.25)};
    }
	`};

  svg {
    ${size("100%")};
    ${position("absolute", 0, 0, null, null)};
    line-height: 58px;
    transform: translate(-100%, 0);
    transition: all 0.52s ease 0s;
  }

  &:focus,
  &:hover {
    background: #a07f40;
    color: #050505;
  }

  &:hover {
    svg {
      transform: translate(0, 0);
      transition: all 0.52s ease 0s;
    }

    span {
      transform: translate(100%, 0);
      transition: all 0.52s ease 0s;
    }
  }

  span {
    ${position("absolute", 0, null, null, 0)};
    transform: translate(0, 0);
    transition: all 0.52s ease 0s;
    width: 100%;
  }
`;

const blink = keyframes`
	90% {
		animation-timing-function: ease-in;
		transform: none;
	}

	93% {
		transform: translateY(15px) scaleY(0);
	}

	100% {
		animation-timing-function: ease-out;
	}
`;

const squeeze = keyframes`
	90% {
		animation-timing-function: ease-in;
		transform: none;
	}

	93% {
		transform: translateY(3px) scaleY(0.8);
	}

	100% {
		animation-timing-function: ease-out;
	}
`;

const AllSeeingEyeWrap = styled.svg`
  margin: auto;

  #eye {
    animation: ${squeeze} 2.4s infinite;
  }
  #lid {
    animation: ${blink} 2.4s infinite;
  }
`;

export const AllSeeingEye = () => (
  <AllSeeingEyeWrap height="100" version="1.1" viewBox="0 0 30 30" width="100">
    <defs>
      <path
        d="M0,15.089434 C0,16.3335929 5.13666091,24.1788679 14.9348958,24.1788679 C24.7325019,24.1788679 29.8697917,16.3335929 29.8697917,15.089434 C29.8697917,13.8456167 24.7325019,6 14.9348958,6 C5.13666091,6 0,13.8456167 0,15.089434 Z"
        id="outline"
      />
      <mask id="mask">
        <rect fill="white" height="100%" width="100%" />
        <use fill="black" id="lid" xlinkHref="#outline" />
      </mask>
    </defs>
    <g id="eye">
      <path
        d="M0,15.089434 C0,16.3335929 5.13666091,24.1788679 14.9348958,24.1788679 C24.7325019,24.1788679 29.8697917,16.3335929 29.8697917,15.089434 C29.8697917,13.8456167 24.7325019,6 14.9348958,6 C5.13666091,6 0,13.8456167 0,15.089434 Z M14.9348958,22.081464 C11.2690863,22.081464 8.29688487,18.9510766 8.29688487,15.089434 C8.29688487,11.2277914 11.2690863,8.09740397 14.9348958,8.09740397 C18.6007053,8.09740397 21.5725924,11.2277914 21.5725924,15.089434 C21.5725924,18.9510766 18.6007053,22.081464 14.9348958,22.081464 L14.9348958,22.081464 Z M18.2535869,15.089434 C18.2535869,17.0200844 16.7673289,18.5857907 14.9348958,18.5857907 C13.1018339,18.5857907 11.6162048,17.0200844 11.6162048,15.089434 C11.6162048,13.1587835 13.1018339,11.593419 14.9348958,11.593419 C15.9253152,11.593419 14.3271242,14.3639878 14.9348958,15.089434 C15.451486,15.7055336 18.2535869,14.2027016 18.2535869,15.089434 L18.2535869,15.089434 Z"
        fill="#050505"
      />
      <use fill="#111111" mask="url(#mask)" xlinkHref="#outline" />
    </g>
  </AllSeeingEyeWrap>
);

import styled from "styled-components";
import { media, mediaMax } from "./utils";

export const StyledFooter = styled.footer`
  background-color: #fff;
  text-align: center;

  &::after {
    clear: both;
    content: "";
    display: block;
  }

  ${mediaMax.tablet`
		padding-top: 1.2rem;
		padding-bottom: 1.2rem;
	`};
`;

export const StyledCopyright = styled.p`
  font-family: Oswald, sans-serif;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 0.3em;
  text-indent: 0.3em;
  margin-bottom: 12px;

  ${media.tablet`
		margin: 0;
		float: left;
		height: 55px;
		line-height: 55px;
	`};

  > span {
    color: #c0a062;
  }
`;

export const StyledSocialList = styled.ul`
  display: inline-block;

  ${media.tablet`
    float: right;
    &::after {
    clear: both;
    content: "";
    display: block;
  }
  `};

  li {
    float: left;
    margin-right: 1.6rem;
    position: relative;
    ${media.tablet`
      /* height: 55px;
      line-height: 55px; */
        height: 100%;
        line-height: 1;
        /* 27.5px / 2 = 14px */
        top: 14px;
    `};
    a {
      width: 27.5px;
      height: 27.5px;
      line-height: 27.5px !important;
      position: relative;
      display: inline-block;
      color: #333;
      transition: all 0.27s cubic-bezier(0.3, 0.1, 0.58, 1);
      &::before {
        border-radius: 2px;
        border: 1px solid #333;
        content: "";
        display: inline-block;
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        transform: rotate(45deg);
        transition: all 0.27s cubic-bezier(0.3, 0.1, 0.58, 1);
        width: 100%;
      }
      &:hover {
        &::before {
          background: #333;
        }
        svg {
          fill: #fff;
        }
      }
      svg {
        fill: #333;
        height: 100%;
        left: 0;
        max-width: 16px;
        position: relative;
        top: 0;
        transition: all 0.27s cubic-bezier(0.3, 0.1, 0.58, 1);
        width: 50%;
      }
    }
  }
`;
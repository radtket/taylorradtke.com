import styled, { css } from "styled-components";
import { media, mediaMax } from "../utils";
import SendAirplaneIcon from "../../../static/icons/icon__mail--send.svg";

export const StyledContactForm = styled.form`
  max-width: 500px;
  margin: auto auto 1.2rem auto;

  ${media.tablet`
		float: right;
		width: calc(100% - 300px);
		margin-left: 2.4rem;
		max-width: 100%;
	`};
`;

export const StyledSubmitButton = styled.button`
  appearance: none;
  background: #333333;
  border-radius: 2.4rem;
  border: 2px solid transparent;
  box-shadow: none;
  color: #ffffff;
  cursor: pointer;
  display: block;
  float: right;
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  line-height: 1;
  margin: 6px 0 0 0;
  outline: 0;
  overflow: visible;
  padding: 1.2rem 2.4rem;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  touch-action: manipulation;
  transition: all 0.2s cubic-bezier(0, 0, 0.58, 1);
  user-select: none;
  white-space: nowrap;

  &::before {
    background-image: url(${SendAirplaneIcon});
    background-position: 50% !important;
    background-repeat: no-repeat !important;
    background-size: contain !important;
    content: "";
    display: inline-block;
    height: 1.2rem;
    margin-right: 0.6rem;
    position: relative;
    top: -1px;
    transition: all 0.2s ease-out;
    vertical-align: middle;
    width: 16px;
  }

  &:hover,
  &:focus {
    border-color: transparent;
    color: rgba(255, 255, 255, 0.85);
    background-color: rgba(0, 0, 0, 0.7);
    box-shadow: none;
    outline: 0;
  }

  &:active {
    cursor: pointer !important;
    outline: none !important;
  }

  &.disabled,
  &[disabled],
  &[disabled],
  &:disabled {
    cursor: not-allowed;
    filter: alpha(opacity=50);
    opacity: 0.5;
  }
`;

export const InputStyles = css`
  appearance: none;
  background-color: #ffffff;
  background-image: none;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0;
  box-shadow: inset 0 1px 3px rgba(16, 16, 16, 0.06);
  color: #999999;
  display: inline-block;
  font-family: "Open Sans", sans-serif;
  font-size: 1.2rem;
  height: 38px;
  letter-spacing: 0.05rem;
  margin-bottom: 1.2rem;
  outline: 0;
  padding: 0.6rem 1.2rem;
  transition: all 150ms ease;
  vertical-align: middle;
  width: 100%;
  &:hover {
    border-color: #999999;
  }

  &:focus {
    border-color: #333;
    box-shadow: 0 0 3px hsla(0, 0%, 6%, 0.3);
    color: #333;
    outline: 0;
  }

  &:-ms-input-placeholder {
    text-transform: uppercase;
  }

  &::placeholder {
    text-transform: uppercase;
  }
`;

export const StyledFormInput = styled.input`
  ${InputStyles};
`;

export const StyledFormTextArea = styled.textarea`
  ${InputStyles};
  min-height: 114px;
  padding-bottom: 0.8rem;
  padding-top: 0.8rem;
  resize: vertical;
`;

export const StyledContactWrap = styled.ul`
  line-height: 1;

  ${media.tablet`
		float: left;
	`};
`;

export const StyledContactItem = styled.li`
  margin-bottom: 2.4rem;

  &::after {
    clear: both;
    content: "";
    display: block;
  }
`;

export const StyledContactIconWrap = styled.figure`
  height: 4.8rem;
  line-height: 1;
  text-align: center;
  width: 4.8rem;

  ${media.tablet`
		border-left: 1px solid rgba(0, 0, 0, 0.2);
		display: inline-block;
		float: right;
		margin-left: 1.2rem;
	`};

  ${mediaMax.tablet`
		border-bottom: 1px solid rgba(0, 0, 0, 0.2);
		margin-bottom: 0.4rem;
		margin-left: auto;
		margin-right: auto;
	`};

  > svg {
    fill: #333;
    height: 100%;
    left: 0;
    max-width: 16px;
    position: relative;
    top: 0;
    transition: all 0.27s cubic-bezier(0.3, 0.1, 0.58, 1);
    width: 50%;
  }
`;

export const StyledContactItemDetails = styled.dl`
  color: #999;
  padding-bottom: 0.6rem;
  padding-top: 0.6rem;
  text-align: center;

  ${media.tablet`
		display: inline-block;
		float: right;
		text-align: right;
	`};
`;

export const StyledContactItemKey = styled.dt`
  font-size: 1.2rem;
  margin-bottom: 0.6rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

export const StyledContactItemValue = styled.a`
  color: #666;
  margin-bottom: 0;
`;

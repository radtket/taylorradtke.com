import styled, { css } from "styled-components";
import { clearFix, size, padding, position, margin } from "polished";
import { media, mediaMax } from "../utils";
import { useSpacing } from "../Theme";

export const StyledContactForm = styled.form`
  max-width: 500px;
  margin: auto auto ${useSpacing(1)} auto;

  ${media.tablet`
		float: right;
		width: calc(100% - 300px);
		margin-left: ${useSpacing(2)};
		max-width: 100%;
	`};
`;

export const StyledSubmitButton = styled.button`
  appearance: none;
  background: ${({ theme }) => theme.colors.grey[100]};
  border-radius: ${useSpacing(2)};
  border: 2px solid transparent;
  box-shadow: none;
  color: ${({ theme }) => theme.colors.common.white};
  cursor: pointer;
  display: block;
  float: right;
  font-size: ${useSpacing(1)};
  font-weight: 600;
  letter-spacing: 0.1em;
  line-height: 1;
  margin: ${useSpacing(0.5)} 0 0 0;
  outline: 0;
  overflow: visible;
  padding: ${useSpacing(1)} ${useSpacing(2)};
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  touch-action: manipulation;
  transition: all 0.2s cubic-bezier(0, 0, 0.58, 1);
  user-select: none;
  white-space: nowrap;

  svg {
    height: ${useSpacing(1)};
    position: relative;
    top: 1px;
    margin-right: ${useSpacing(0.5)};
    fill: ${({ theme }) => theme.colors.common.white};
  }

  &:hover,
  &:focus {
    border-color: transparent;
    color: ${({ theme }) => theme.colors.shadows.white[85]};
    background-color: ${({ theme }) => theme.colors.shadows.black[70]};
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
  ${size("38px", "100%")};
  appearance: none;
  background-color: ${({ theme }) => theme.colors.common.white};
  background-image: none;
  border: 1px solid ${({ theme }) => theme.colors.shadows.black[20]};
  border-radius: 0;
  box-shadow: inset 0 1px 3px ${({ theme }) => theme.colors.shadows.dark[6]};
  color: ${({ theme }) => theme.colors.grey[200]};
  display: inline-block;
  font-family: ${({ theme }) => theme.font.family.primary};
  font-size: ${useSpacing(1)};
  letter-spacing: 0.05rem;
  margin-bottom: ${useSpacing(1)};
  outline: 0;
  padding: ${padding(useSpacing(0.5), useSpacing(1))};
  transition: all 150ms ease;
  vertical-align: middle;

  &:hover {
    border-color: ${({ theme }) => theme.colors.grey[200]};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.grey[100]};
    box-shadow: 0 0 3px hsla(0, 0%, 6%, 0.3);
    color: ${({ theme }) => theme.colors.grey[100]};
    outline: 0;
  }

  &:-ms-input-placeholder,
  &::placeholder {
    text-transform: uppercase;
  }
`;

export const StyledFormInput = styled.input`
  ${InputStyles};
`;

export const StyledFormTextArea = styled.textarea`
  ${InputStyles};
  ${padding("0.8rem", null)};
  min-height: 114px;
  resize: vertical;
`;

export const StyledContactWrap = styled.ul`
  line-height: 1;

  ${media.tablet`
		float: left;
	`};
`;

export const StyledContactItem = styled.li`
  margin-bottom: ${useSpacing(2)};
  ${clearFix()}
`;

export const StyledContactIconWrap = styled.figure`
  height: 4.8rem;
  line-height: 1;
  text-align: center;
  width: 4.8rem;

  ${media.tablet`
		border-left: 1px solid ${({ theme }) => theme.colors.shadows.black[20]};
		display: inline-block;
		float: right;
		margin-left: ${useSpacing(1)};
	`};

  ${mediaMax.tablet`
    border-bottom: 1px solid ${({ theme }) => theme.colors.shadows.black[20]};
    ${margin(null, "auto", "0.4rem")};
	`};

  > svg {
    ${size("100%", "50%")}
    ${position("relative", 0, null, null, 0)};
    fill: ${({ theme }) => theme.colors.grey[100]};
    max-width: 16px;
    transition: all 0.27s cubic-bezier(0.3, 0.1, 0.58, 1);
  }
`;

export const StyledContactItemDetails = styled.dl`
  color: ${({ theme }) => theme.colors.grey[200]};
  padding: ${padding(useSpacing(0.5), null, useSpacing(0.5), null)};
  text-align: center;

  ${media.tablet`
		display: inline-block;
		float: right;
		text-align: right;
	`};
`;

export const StyledContactItemKey = styled.dt`
  font-size: ${useSpacing(1)};
  font-weight: 600;
  letter-spacing: 0.1em;
  margin-bottom: ${useSpacing(0.5)};
  text-transform: uppercase;
`;

export const StyledContactItemValue = styled.a`
  color: ${({ theme }) => theme.colors.grey[300]};
  margin-bottom: 0;
`;

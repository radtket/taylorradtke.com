import styled, { css } from "styled-components";
import { clearFix, size, padding, position, margin } from "polished";
import { media, mediaMax, getSpacing } from "../utils";
import ExternalLink from "../../components/ExternalLink";

export const StyledContactForm = styled.form`
  max-width: 500px;
  margin: auto auto ${getSpacing(1.5)} auto;

  ${media.tablet`
		float: right;
		width: calc(100% - 300px);
		margin-left: ${getSpacing(3)};
		max-width: 100%;
	`};
`;

export const StyledSubmitButton = styled.button`
  appearance: none;
  background: ${({ theme }) => theme.colors.grey[100]};
  border-radius: ${getSpacing(3)};
  border: 2px solid transparent;
  box-shadow: none;
  color: ${({ theme }) => theme.colors.common.white};
  cursor: pointer;
  display: block;
  float: right;
  font-size: ${getSpacing(1.5)};
  font-weight: 600;
  letter-spacing: 0.1em;
  line-height: 1;
  margin: ${getSpacing(0.75)} 0 0 0;
  outline: 0;
  overflow: visible;
  padding: ${getSpacing(1.5)} ${getSpacing(3)};
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  touch-action: manipulation;
  transition: all 0.2s cubic-bezier(0, 0, 0.58, 1);
  user-select: none;
  white-space: nowrap;

  svg {
    transition: fill 0.2s cubic-bezier(0, 0, 0.58, 1);
    height: ${getSpacing(1.5)};
    position: relative;
    top: 1px;
    margin-right: ${getSpacing(0.75)};
    fill: ${({ theme }) => theme.colors.common.white};
  }

  &:hover,
  &:focus {
    border-color: transparent;
    color: ${({ theme }) => theme.colors.shadows.white[85]};
    background-color: ${({ theme }) => theme.colors.shadows.black[70]};
    box-shadow: none;
    outline: 0;

    svg {
      color: ${({ theme }) => theme.colors.shadows.white[85]};
    }
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
  font-size: ${getSpacing(1.5)};
  letter-spacing: 0.05rem;
  margin-bottom: ${getSpacing(1.5)};
  outline: 0;
  padding: ${padding(getSpacing(0.75), getSpacing(1.5))};
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
  ${padding(getSpacing(1), null)};
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
  margin-bottom: ${getSpacing(3)};
  ${clearFix()};
`;

export const StyledContactIconWrap = styled.figure`
  ${size(getSpacing(6))};
  line-height: 1;
  text-align: center;

  ${media.tablet`
		border-left: 1px solid ${({ theme }) => theme.colors.shadows.black[20]};
		display: inline-block;
		float: right;
		margin-left: ${getSpacing(1.5)};
	`};

  ${mediaMax.tablet`
    border-bottom: 1px solid ${({ theme }) => theme.colors.shadows.black[20]};
    ${margin(null, "auto", getSpacing(0.5))};
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
  padding: ${padding(getSpacing(0.75), null, getSpacing(0.75), null)};
  text-align: center;

  ${media.tablet`
		display: inline-block;
		float: right;
		text-align: right;
	`};
`;

export const StyledContactItemKey = styled.dt`
  font-size: ${getSpacing(1.5)};
  font-weight: 600;
  letter-spacing: 0.1em;
  margin-bottom: ${getSpacing(0.75)};
  text-transform: uppercase;
`;

export const StyledContactItemValue = styled(ExternalLink)`
  color: ${({ theme }) => theme.colors.grey[300]};
  margin-bottom: 0;
`;

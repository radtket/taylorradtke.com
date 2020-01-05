import styled from "styled-components";
import { position, size } from "polished";

// eslint-disable-next-line import/prefer-default-export
export const StyledSliderArrow = styled.button`
  ${position("absolute", "50%", null, null, null)};
  ${size("24px")};
  background: transparent;
  border-radius: 2px;
  border: 1px solid ${({ theme }) => theme.colors.grey[100]};
  cursor: pointer;
  display: block;
  font-size: 0;
  line-height: 0;
  outline: 0;
  padding: 0;
  text-align: center;
  transform: translate(0, -50%);

  &:hover {
    background: ${({ theme }) => theme.colors.grey[100]};
    color: transparent;
    outline: none;

    svg {
      opacity: 1;
      fill: ${({ theme }) => theme.colors.common.white};
    }
  }

  &:focus {
    color: transparent;
    outline: none;
  }

  &.slick-disabled svg {
    opacity: 0.25;
  }

  svg {
    opacity: 0.75;
    transition: inherit;
    height: 50%;
    fill: #010101;
  }

  &.slick-prev {
    left: -24px;
  }

  &.slick-next {
    right: -24px;
  }
`;

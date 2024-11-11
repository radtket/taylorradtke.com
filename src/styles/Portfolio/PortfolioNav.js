import styled from "styled-components";
import { position, padding } from "polished";
import { mediaMax, getSpacing } from "../utils";
import { ScreenReaderTextCSS } from "../Shared";

const StyledPortfolioNav = styled.nav`
  ${position("fixed", 0, null, null, 0)};
  background-color: ${({ theme }) => theme.colors.shadows.white[97]};
  box-shadow: 0 1px 1px ${({ theme }) => theme.colors.shadows.black[10]};
  justify-items: center;
  width: 100%;
  z-index: ${({ theme }) => theme.zIndex.navbar};

  a {
    ${padding(0, getSpacing(3))}
    border: 0;
    color: ${({ theme }) => theme.colors.grey[100]};
    display: block;
    float: left;
    line-height: ${({ theme }) => theme.sizes.navigation.height};
    transition: all 0.2s cubic-bezier(0, 0, 0.58, 1);
    width: 33.333%;

    /* All Works */
    &:nth-child(2) {
      text-align: center;
    }

    /* Next Project */
    &:last-of-type {
      text-align: right;
      span {
        margin-right: 1rem;
        margin-left: 0;
      }
    }

    &:hover {
      color: ${({ theme }) => theme.colors.grey[100]};
      background: ${({ theme }) => theme.colors.primary.main};

      svg {
        fill: ${({ theme }) => theme.colors.grey[100]};
      }
    }

    span {
      display: inline-block;
      font-size: 1.2rem;
      font-weight: 600;
      letter-spacing: 0.1em;
      margin-left: 1rem;
      text-transform: uppercase;
      vertical-align: middle;

      ${mediaMax.phoneLg`
        ${ScreenReaderTextCSS}
      `};
    }

    svg {
      display: inline-block;
      height: ${getSpacing(1.75)};
      vertical-align: middle;
    }
  }
`;

export default StyledPortfolioNav;

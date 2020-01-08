import styled from "styled-components";
import { mediaMax } from "../utils";
import { ScreenReaderTextCSS } from "../Shared";

const StyledPortfolioNav = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zIndex.navbar};
  justify-items: center;
  background-color: ${({ theme }) => theme.colors.shadows.white[97]};
  box-shadow: 0 1px 1px ${({ theme }) => theme.colors.shadows.black[10]};

  a {
    padding: 0 2.4rem;
    border: 0;
    display: block;
    color: ${({ theme }) => theme.colors.grey[100]};
    width: 33.333%;
    float: left;
    line-height: ${({ theme }) => theme.sizes.navigation.height};
    transition: all 0.2s cubic-bezier(0, 0, 0.58, 1);

    &:hover {
      color: ${({ theme }) => theme.colors.grey[100]};
      background: ${({ theme }) => theme.colors.primary.main};

      svg {
        fill: ${({ theme }) => theme.colors.grey[100]};
      }
    }

    span {
      display: inline-block;
      vertical-align: middle;
      font-size: 1.2rem;
      font-weight: 600;
      letter-spacing: 0.1em;
      text-transform: uppercase;

      ${mediaMax.phoneLg`
        ${ScreenReaderTextCSS}
      `};
    }
    svg {
      display: inline-block;
      vertical-align: middle;
      height: 1.4rem;
    }
  }
`;

export default StyledPortfolioNav;

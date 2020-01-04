import styled from "styled-components";
import { mediaMax } from "../utils";
import { ScreenReaderTextCSS } from "../Shared";

const StyledPortfolioNav = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  justify-items: center;
  background-color: rgba(255, 255, 255, 0.97);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);

  a {
    padding: 0 2.4rem;
    border: 0;
    display: block;
    color: #333;
    width: 33.333%;
    float: left;
    line-height: 55px;
    transition: all 0.2s cubic-bezier(0, 0, 0.58, 1);

    &:hover {
      color: #333;
      background: #c0a062;

      svg {
        fill: #333;
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

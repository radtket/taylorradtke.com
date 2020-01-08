import styled from "styled-components";
import Img from "gatsby-image";
import { position } from "polished";
import { useSpacing } from "../utils";

const StyledBrowserMockup = styled(Img)`
  box-shadow: ${({ theme }) => `0 20px 40px  ${theme.colors.shadows.black[30]},
    0 15px 12px ${theme.colors.shadows.black[20]}`};
  margin-bottom: ${useSpacing(7.5)};

  @media only screen and (min-width: 600px) {
    box-shadow: ${({
      theme,
    }) => `0 10px 20px  ${theme.colors.shadows.black[30]},
    0 8px 6px ${theme.colors.shadows.black[20]}`};
    display: block;
    margin-bottom: ${useSpacing(15)};
    overflow: visible !important;

    &::before {
      ${position("absolute", "-46px", null, null, null)};
      background: ${({ theme }) => theme.colors.grey[500]};
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
      border: 1px solid;
      color: ${({ theme }) => theme.colors.grey[200]};
      content: "● ● ●";
      display: block;
      font-size: 1.5em;
      padding: 2px 8px 6px;
      text-align: left;
      width: 100%;
    }
  }
  > div {
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    border: 1px solid ${({ theme }) => theme.colors.shadows.black[20]};
    border-top: 0;
    overflow: hidden;
    position: relative;
  }
`;

export default StyledBrowserMockup;

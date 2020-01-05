import styled from "styled-components";
import Img from "gatsby-image";

const StyledBrowserMockup = styled(Img)`
  box-shadow: ${({ theme }) => `0 20px 40px  ${theme.colors.shadows.black[30]},
    0 15px 12px ${theme.colors.shadows.black[20]}`};
  margin-bottom: 60px;

  @media only screen and (min-width: 600px) {
    box-shadow: ${({
      theme,
    }) => `0 10px 20px  ${theme.colors.shadows.black[30]},
    0 8px 6px ${theme.colors.shadows.black[20]}`};

    display: block;
    margin-bottom: 120px;
    overflow: visible !important;
    &::before {
      background: ${({ theme }) => theme.colors.grey[500]};
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
      border: 1px solid;
      color: ${({ theme }) => theme.colors.grey[200]};
      content: "● ● ●";
      display: block;
      font-size: 1.5em;
      padding: 2px 8px 6px;
      position: absolute;
      text-align: left;
      top: -46px;
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

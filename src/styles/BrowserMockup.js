import Img from "gatsby-image";
import styled from "styled-components";

const BrowserMockup = styled(Img)`
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.2);
  margin-bottom: 60px;

  @media only screen and (min-width: 600px) {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3), 0 8px 6px rgba(0, 0, 0, 0.2);
    display: block;
    margin-bottom: 120px;
    overflow: visible !important;
    &::before {
      background: #ddd;
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
      border: 1px solid;
      color: #999;
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
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-top: 0;
    overflow: hidden;
    position: relative;
  }
`;

export default BrowserMockup;

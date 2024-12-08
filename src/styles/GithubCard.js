import styled, { css } from "styled-components";
import { size, padding, margin, rem } from "polished";
import { media } from "./utils";

export const StyledGithubCardGrid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

export const StyledGithubCardWrap = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 24px;
  width: 100%;

  ${media.tablet`
    width: 50%;
    ${padding(null, "12px")};
	`};
`;

export const StyledGithubCard = styled.article`
  ${({ theme: { colors, font } }) => css`
    border-radius: 3px;
    border: 1px solid ${colors.shadows.black[20]};
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08), 0 8px 6px rgba(0, 0, 0, 0.04);
    color: ${colors.grey[100]};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 180px;
    padding: 20px;
    transition: box-shadow 300ms ease-in-out;
    width: 100%;

    &:hover {
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.16), 0 8px 6px rgba(0, 0, 0, 0.08);
    }

    .repo-details {
      h4 {
        a {
          color: ${colors.grey[600]};
          font-size: 2rem;
          font-family: ${font.family.primary};
          text-transform: none;

          &:hover {
            color: ${colors.primary.main};
          }
        }
      }

      p {
        margin-bottom: 0.5rem;
      }
    }

    footer {
      display: flex;
      flex-direction: column;

      > a {
        align-self: end;
        padding-bottom: 2px;
        position: relative;
        color: ${colors.grey[300]};
        ${margin(rem("8px"), null)};

        /* transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1); */

        &:hover {
          &:after {
            left: 0;
            right: auto;
            width: 100%;
          }
        }

        &:after {
          background: currentColor;
          bottom: -2px;
          content: "";
          height: 1px;
          left: auto;
          position: absolute;
          right: 0;
          transition: width 0.6s cubic-bezier(0.25, 0.8, 0.25, 1) 0s;
          width: 0;
        }
      }
    }

    .repo-meta {
      display: flex;
      align-items: center;
      justify-content: space-between;

      ul {
        display: flex;
        align-items: center;
      }

      li {
        color: ${colors.grey[300]};
        height: 2rem;
        font-size: 1.6rem;
        line-height: 1;
        position: relative;
        text-transform: uppercase;
        vertical-align: middle;

        &:first-of-type {
          margin-right: 20px;
        }

        svg {
          display: inline-block;
          height: 1.6rem;
          margin-right: 1rem;
          vertical-align: middle;
          fill: ${colors.grey[600]};
        }

        span {
          display: inline-block;
          vertical-align: middle;
          color: ${colors.grey[600]};
        }
      }
    }
  `}
`;

export const StyledGithubCardLanguage = styled.h4`
  ${({ theme: { colors }, color }) => css`
    text-transform: none;
    position: relative;
    padding-left: 20px;
    font-family: "Open Sans", sans-serif;
    color: ${colors.grey[600]};

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      margin-top: -6px;
      ${size("12px")};
      background: ${color};
      border-radius: 50%;
    }
  `}
`;

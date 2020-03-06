import styled from "styled-components";
import { size, padding } from "polished";
import { media } from "./utils";

export const StyledGithubCardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const StyledGithubCardWrap = styled.div`
  padding-bottom: 24px;
  width: 100%;

  ${media.tablet`
    width: 50%;
    ${padding(null, "12px")};
	`};
`;

export const StyledGithubCard = styled.a`
  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme.colors.shadows.black[20]};
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08), 0 8px 6px rgba(0, 0, 0, 0.04);
  color: #333;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 180px;
  padding: 20px;
  transition: box-shadow 300ms ease-in-out;

  &:hover {
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.16), 0 8px 6px rgba(0, 0, 0, 0.08);
  }

  dt {
    color: #101010;
    font-size: 2rem;
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
      color: #666;
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
        fill: #101010;
      }

      span {
        display: inline-block;
        vertical-align: middle;
        color: #101010;
      }
    }
  }
`;

export const StyledGithubCardLanguage = styled.h4`
  text-transform: none;
  position: relative;
  padding-left: 20px;
  font-family: "Open Sans", sans-serif;
  color: #101010;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -6px;
    ${size("12px")};
    background: ${({ color }) => color || "#bada55"};
    border-radius: 50%;
  }
`;

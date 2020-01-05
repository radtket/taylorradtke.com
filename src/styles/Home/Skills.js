import styled from "styled-components";
import { media } from "../utils";

export const StyledSkillsList = styled.ul`
  margin-bottom: 2.4rem;
  display: block;

  &::after {
    clear: both;
    content: "";
    display: block;
  }
`;

export const StyledSkillsListItem = styled.li`
  color: #666;
  font-family: Oswald, sans-serif;
  font-size: 1.4rem;
  letter-spacing: 0.1em;
  margin-bottom: 1.2rem;
  text-transform: uppercase;
  line-height: 1;
  position: relative;
  vertical-align: middle;
  height: 18px;

  ${media.phoneLg`
    width: 50%;
    float: left;
  `};

  ${media.navbreak`
    width: 33.33333%;
  `};

  span {
    display: inline-block;
    vertical-align: middle;
  }

  svg {
    display: inline-block;
    vertical-align: middle;
    height: 16px;
    margin-right: 1rem;
  }
`;

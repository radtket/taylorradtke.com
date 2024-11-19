import styled from "styled-components";
import { clearFix } from "polished";
import { media, getSpacing } from "../utils";

export const StyledSkillsList = styled.ul`
  ${clearFix()};
  display: block;
  margin-bottom: ${getSpacing(3)};
`;

export const StyledSkillsListItem = styled.li`
  color: ${({ theme }) => theme.colors.grey[300]};
  font-family: ${({ theme }) => theme.font.family.secondary};
  font-size: 1.4rem;
  height: 18px;
  letter-spacing: 0.1em;
  line-height: 1;
  margin-bottom: ${getSpacing(1.5)};
  position: relative;
  text-transform: uppercase;
  vertical-align: middle;

  ${media.phoneLg`
    float: left;
    width: 50%;
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
    height: ${getSpacing(2)};
    margin-right: 1rem;
    vertical-align: middle;
  }
`;

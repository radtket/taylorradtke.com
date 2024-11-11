import styled from "styled-components";
import { padding, size, position, clearFix } from "polished";
import { media, mediaMax, getSpacing } from "./utils";

export const StyledFooter = styled.footer`
  ${clearFix()};
  background-color: ${({ theme }) => theme.colors.common.white};
  text-align: center;

  ${mediaMax.tablet`
    ${padding(getSpacing(1.5), null)}
	`};
`;

export const StyledCopyright = styled.p`
  font-family: ${({ theme }) => theme.font.family.secondary};
  font-size: 1.2rem;
  letter-spacing: 0.3em;
  margin-bottom: ${getSpacing(1.5)};
  text-indent: 0.3em;
  text-transform: uppercase;

  ${media.tablet`
		float: left;
		height: ${({ theme }) => theme.sizes.navigation.height}
		line-height: ${({ theme }) => theme.sizes.navigation.height}
		margin: 0;
	`};

  > span {
    color: ${({ theme }) => theme.colors.primary.main};
  }
`;

export const StyledSocialList = styled.ul`
  display: inline-block;

  ${media.tablet`
    float: right;
    ${clearFix()};
  `};

  li {
    float: left;
    margin-right: ${getSpacing(2)};
    position: relative;

    ${media.tablet`
        height: 100%;
        line-height: 1;
        top: 14px;
    `};

    a {
      ${size("27.5px")}
      color: ${({ theme }) => theme.colors.grey[100]};
      display: inline-block;
      line-height: 27.5px !important;
      position: relative;
      transition: all 0.27s cubic-bezier(0.3, 0.1, 0.58, 1);

      &::before {
        ${size("100%")};
        ${position("absolute", 0, null, null, 0)};
        border-radius: 2px;
        border: 1px solid ${({ theme }) => theme.colors.grey[100]};
        content: "";
        display: inline-block;
        transform: rotate(45deg);
        transition: all 0.27s cubic-bezier(0.3, 0.1, 0.58, 1);
      }

      &:hover {
        &::before {
          background: ${({ theme }) => theme.colors.grey[100]};
        }

        svg {
          fill: ${({ theme }) => theme.colors.common.white};
        }
      }

      svg {
        ${size("100%", "50%")};
        ${position("relative", 0, null, null, 0)};
        fill: ${({ theme }) => theme.colors.grey[100]};
        max-width: ${getSpacing(2)};
        transition: all 0.27s cubic-bezier(0.3, 0.1, 0.58, 1);
      }
    }
  }
`;

import styled from "styled-components";
import { position, rem, size } from "polished";
import { media, getSpacing } from "../utils";

export const StyledTimeLineDot = styled.div`
  ${position("absolute", "0.3rem", null, null, "-3.1rem")};
  ${size(getSpacing(1.25))};
  background: ${({ theme }) => theme.colors.primary.main};
  border-radius: 50%;
  box-shadow: 0 0 0 6px ${({ theme }) => theme.colors.common.white};
`;

export const StyledJobTimeline = styled.div`
  border-left: 0.125rem solid;
  margin-left: calc(1rem - 0.125rem);
  padding-left: ${getSpacing(3)};
  position: relative;
`;

export const StyledJob = styled.div`
  position: relative;
`;

export const StyledJobWrap = styled.div`
  padding-bottom: ${getSpacing(6)};

  ${media.desktop`
		display: flex;
		flex-flow: row wrap;
		margin-right: -${getSpacing(6)};
		position: relative;
	`};
`;

export const StyledJobDetails = styled.ul`
  margin-bottom: ${rem("12px")};

  ${media.desktop`
		flex-basis: 40%;
		flex-grow: 1;
		flex-shrink: 0;
		overflow: hidden;
		padding-right: ${getSpacing(6)};
	`};
`;

export const StyledJobTimeFrame = styled.li`
  color: ${({ theme }) => theme.colors.primary.main};
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

export const StyledJobCompany = styled.li`
  font-size: 2rem;

  > a {
    color: ${({ theme }) => theme.colors.grey[600]};

    &:hover {
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }
`;

export const StyledJobPosition = styled.li`
  color: ${({ theme }) => theme.colors.grey[300]};
`;

export const StyledJobLocation = styled.li`
  color: ${({ theme }) => theme.colors.grey[200]};
  font-size: 1.2rem;
`;

export const StyledJobDescription = styled.div`
  ${media.desktop`
		flex-basis: 60%;
		flex-grow: 1;
		flex-shrink: 0;
		overflow: hidden;
		padding-right: ${getSpacing(6)};
	`};

  ul {
    li {
      margin-bottom: ${getSpacing(3)};
      strong {
        color: ${({ theme }) => theme.colors.grey[600]};
        font-weight: 600;
      }
    }
  }
`;

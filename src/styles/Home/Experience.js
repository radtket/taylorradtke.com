import styled from "styled-components";
import { position, size } from "polished";
import { media, useSpacing } from "../utils";

export const StyledTimeLineDot = styled.div`
  ${position("absolute", "0.3rem", null, null, "-3.1rem")};
  ${size(useSpacing(1.25))};
  background: ${({ theme }) => theme.colors.primary.main};
  border-radius: 50%;
  box-shadow: 0 0 0 6px ${({ theme }) => theme.colors.common.white};
`;

export const StyledJobTimeline = styled.div`
  border-left: 0.125rem solid;
  margin-left: calc(1rem - 0.125rem);
  padding-left: ${useSpacing(3)};
  position: relative;
`;

export const StyledJob = styled.div`
  position: relative;
`;

export const StyledJobWrap = styled.div`
  padding-bottom: ${useSpacing(6)};

  ${media.desktop`
		display: flex;
		flex-flow: row wrap;
		margin-right: -${useSpacing(6)};
		position: relative;
	`};
`;

export const StyledJobDetails = styled.ul`
  ${media.desktop`
		flex-basis: 40%;
		flex-grow: 1;
		flex-shrink: 0;
		overflow: hidden;
		padding-right: ${useSpacing(6)};
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

export const StyledJobDescription = styled.p`
  ${media.desktop`
		flex-basis: 60%;
		flex-grow: 1;
		flex-shrink: 0;
		overflow: hidden;
		padding-right: ${useSpacing(6)};
	`};
`;

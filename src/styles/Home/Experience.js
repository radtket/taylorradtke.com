import styled from "styled-components";
import { media } from "../utils";

export const StyledTimeLineDot = styled.div`
  background: #c0a062;
  border-radius: 50%;
  box-shadow: 0 0 0 6px #ffffff;
  height: 1rem;
  left: -3.1rem;
  position: absolute;
  top: 0.3rem;
  width: 1rem;
`;

export const StyledJobTimeline = styled.div`
  border-left: 0.125rem solid;
  margin-left: calc(1rem - 0.125rem);
  padding-left: 2.4rem;
  position: relative;
`;

export const StyledJob = styled.div`
  position: relative;
`;

export const StyledJobWrap = styled.div`
  padding-bottom: 4.8rem;

  ${media.desktop`
		display: flex;
		flex-flow: row wrap;
		margin-right: -4.8rem;
		position: relative;
	`};
`;

export const StyledJobDetails = styled.ul`
  ${media.desktop`
		flex-basis: 40%;
		flex-grow: 1;
		flex-shrink: 0;
		overflow: hidden;
		padding-right: 4.8rem;
	`};
`;

export const StyledJobTimeFrame = styled.li`
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #c0a062;
`;

export const StyledJobCompany = styled.li`
  font-size: 20px;
  font-size: 2rem;

  > a {
    color: #101010;

    &:hover {
      color: #c0a062;
    }
  }
`;

export const StyledJobPosition = styled.li`
  color: #666;
`;

export const StyledJobLocation = styled.li`
  color: #999;
  font-size: 1.2rem;
`;

export const StyledJobDescription = styled.p`
  ${media.desktop`
		flex-basis: 60%;
		flex-grow: 1;
		flex-shrink: 0;
		overflow: hidden;
		padding-right: 4.8rem;
	`};
`;

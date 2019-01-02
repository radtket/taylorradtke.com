import styled from "@emotion/styled";

export const Container = styled.div`
	margin: auto;
	max-width: 1200px;
	padding: 0 12px;
	width: 100%;
	&::after {
		clear: both;
		content: "";
		display: block;
	}
`;

export const ContainerFull = styled.div`
	margin: 0 auto;
	max-width: 100%;
	padding: 0 12px;
	position: relative;
	width: 100%;

	&::after {
		clear: both;
		content: "";
		display: block;
	}
`;

export const ScreenReaderText = styled.span`
	border: 0;
	clip: rect(0 0 0 0);
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
	width: 1px;
`;

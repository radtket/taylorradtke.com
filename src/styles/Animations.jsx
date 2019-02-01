import { keyframes } from "styled-components";

export const blink = keyframes`
	90% {
		animation-timing-function: ease-in;
		transform: none;
	}

	93% {
		transform: translateY(15px) scaleY(0);
	}

	100% {
		animation-timing-function: ease-out;
	}
`;

export const squeeze = keyframes`
	90% {
		animation-timing-function: ease-in;
		transform: none;
	}

	93% {
		transform: translateY(3px) scaleY(0.8);
	}

	100% {
		animation-timing-function: ease-out;
	}
`;

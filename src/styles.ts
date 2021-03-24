import styled, { keyframes } from "styled-components";

export const AppContainer = styled.div`
	text-align: center;
`;

export const HeaderWrapper = styled.header`
	background-color: #282c34;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: calc(10px + 2vmin);
	color: white;
`;

export const spin = keyframes`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`;

export const LogoWrapper = styled.img`
	height: 40vmin;
	pointer-events: none;
	animation: ${spin} infinite 20s linear;
`;

export const AppLink = styled.a`
	color: #61dafb;
`;

export const Content = styled.p`
	color: white;
`;

export const CodeWrapper = styled.code`
	color: red;
`;

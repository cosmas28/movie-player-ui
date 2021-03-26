import styled from "styled-components";

export const Container = styled.div`
	position: relative;
	display: flex;
	flex: 1 1 32%;
	border-radius: 6px;
	height: 300px;
	cursor: pointer;
	margin: 4px;
`;

export const VideoPoster = styled.img`
	width: 100%;
`;

export const VideoCaption = styled.span`
	position: absolute;
	display: flex;
	width: 100%;
	height: 50px;
	bottom: 0;
	left: 0;
	background: rgba(0,0,0,0.6);;
	align-items: center;
`;

export const Captiontext = styled.span`
	color: #ffffff;
`;

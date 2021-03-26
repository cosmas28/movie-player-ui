import styled from "styled-components";

export const Container = styled.div`
	background-color: #000000;
	min-height: 100vh;
`;

export const SectionsWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	padding: 20px 30px;
`;

export const MainSection = styled.div`
	display: flex;
	flex-direction: column;
	flex: 2 0 auto;
	margin-right: 20px;
	color: #FFFFFF;
	max-width: 73%;
`;

export const VerticalDivider = styled.div`
	width: 1px;
	min-height: 100vh;
	background: #808080;
`;

export const Sidebar = styled.div`
	display: flex;
	flex: 0 1 20%;
	flex-direction: column;
	margin-left: 20px;
	color: #FFFFFF;
`;

export const VideoWrapper = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
`;

export const TopRatedContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	min-height: 400px;
`;

export const TopRatedInnerWrapper = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const TopRatedHeader = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
`;

export const HorizontalRule = styled.div`
	display: flex;
	min-width: 86%;
	height: 1px;
	background: #808080;
	margin-top: 5px;
`;

export const TopRatedHeaderTitle = styled.h4`
	display: flex;
	color: #ffffff;
	text-align: center;
	margin-right: 2px;
`;

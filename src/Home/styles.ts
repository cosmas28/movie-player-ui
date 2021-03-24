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
	flex: 2 0 auto;
	margin-right: 20px;
	color: #FFFFFF;
`;

export const VerticalDivider = styled.div`
	width: 1px;
	min-height: 100vh;
	background: #808080;
`;

export const Sidebar = styled.div`
	display: flex;
	right: 20;
	flex: 0 0 25%;
	flex-direction: column;
	margin-left: 20px;
	color: #FFFFFF;
`;

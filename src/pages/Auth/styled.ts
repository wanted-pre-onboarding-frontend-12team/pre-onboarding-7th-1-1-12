import styled from 'styled-components';

export const Container = styled.main`
	${({ theme }) => theme.layout.flexCenter};
`;

export const InnerContainer = styled.div`
	${({ theme }) => theme.layout.flexColumn};
	width: 50vw;
	background-color: ${({ theme }) => theme.colors.white};
`;

export const ModeButtonWrapper = styled.div`
	display: flex;
`;

export const ModeButton = styled.button<{ active: boolean }>`
	flex: 1;
	padding: 0.5em 0;
	border: 1px solid ${({ theme }) => theme.colors.primary};
	background: ${({ active, theme }) => (active ? theme.colors.primary : theme.colors.white)};
	font-size: ${({ theme }) => theme.fontSizes.medium};
	font-weight: ${({ active, theme }) => (active ? theme.fontWeights.bold : theme.fontWeights.normal)};
	color: ${({ active, theme }) => (active ? theme.colors.white : theme.colors.black)};
`;

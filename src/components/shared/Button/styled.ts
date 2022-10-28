import styled from 'styled-components';

export const Button = styled.button<{ backgroundColor?: string }>`
	margin: 0;
	padding: 0.5em 0;
	border: none;
	background-color: ${({ backgroundColor, theme }) => (backgroundColor ? backgroundColor : theme.colors.primary)};
	font-size: ${({ theme }) => theme.fontSizes.medium};
	font-weight: ${({ theme }) => theme.fontWeights.strongBold};
	color: ${({ theme }) => theme.colors.white};
	cursor: pointer;

	&:disabled {
		opacity: 0.7;
		cursor: not-allowed;
	}
`;

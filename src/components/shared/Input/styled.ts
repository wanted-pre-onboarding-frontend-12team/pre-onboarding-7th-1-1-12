import styled from 'styled-components';

export const InputWrapper = styled.div<{ margin?: string }>`
	display: flex;
	flex-direction: column;
	gap: 0.5em;
	margin: ${({ margin }) => margin && margin};
`;

export const Input = styled.input`
	width: 100%;
	padding: 0.5em;
	border: 1px solid ${({ theme }) => theme.colors.primary};
	border-radius: 0;
	font-size: ${({ theme }) => theme.fontSizes.medium};
`;

export const InputLabel = styled.label`
	font-size: ${({ theme }) => theme.fontSizes.medium};
	font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;

export const InputErrorMessage = styled.span`
	font-size: ${({ theme }) => theme.fontSizes.small};
	color: ${({ theme }) => theme.colors.red};
`;

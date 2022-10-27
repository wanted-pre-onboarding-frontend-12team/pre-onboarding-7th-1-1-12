import styled from 'styled-components';

export const FooterLayout = styled.footer`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 16px 0;

	p {
		padding: 0;
		margin: 0;
		font-size: 16px;
	}
	.btnDiv {
		display: flex;
		flex-direction: row;
		button {
			background-color: transparent;
			border: 0;
			color: violet;
			font-size: 16px;
			font-weight: 700;
		}
	}
`;

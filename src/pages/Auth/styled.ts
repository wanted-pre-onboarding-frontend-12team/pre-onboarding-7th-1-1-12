import styled from 'styled-components';

export const SignDiv = styled.div`
	margin: 0 auto;
	width: 40vw;
	form {
		display: flex;
		flex-direction: column;
		input {
			width: 100%;
		}
		button {
			margin-top: 1rem;
		}
		.btnDiv {
			display: flex;
			flex-direction: row;
			button {
				background-color: transparent;
				border: 0;
				color: violet;
			}
		}
	}
`;

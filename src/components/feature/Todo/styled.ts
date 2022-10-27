import styled from 'styled-components';

export const TodoDiv = styled.div`
	background-color: aliceblue;
	margin: 0 auto;
	width: 40vw;
	div {
		display: flex;
		flex-direction: row;
		.completeCheckbox {
			background-color: skyblue;
			border-radius: 0.3rem;
		}
		.notcompleteCheckbox {
			border-radius: 0.3rem;
			background-color: #ef96a7;
		}
		p {
			margin-left: 1rem;
		}
		input {
			margin-left: 1rem;
		}
		.btnDiv {
			position: absolute;
			right: 31rem;
		}
	}
`;

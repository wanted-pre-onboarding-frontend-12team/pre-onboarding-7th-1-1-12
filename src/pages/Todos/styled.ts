import styled from 'styled-components';

export const TodosDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 41vw;
	margin: 0 auto;
	.createTodo {
		flex-direction: row;
		input {
			margin-right: 0.5rem;
		}
	}
	.todoList {
		border: 0.2rem solid black;
		border-radius: 1rem;
		overflow: hidden;
		margin: 3rem auto;
	}
`;

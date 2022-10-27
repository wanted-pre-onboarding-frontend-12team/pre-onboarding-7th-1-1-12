import styled from 'styled-components';

export const TodosLayout = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: ${(props) => props.theme.width};
	margin: 0 auto;
	padding: 10px;
	border: 2px solid lightgray;
	border-radius: 12px;
	.createTodo {
		flex-direction: row;
		input {
			margin-right: 0.5rem;
		}
	}
`;

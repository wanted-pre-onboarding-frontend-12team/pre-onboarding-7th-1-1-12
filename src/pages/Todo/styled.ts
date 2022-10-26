import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
`;

export const TodoContainer = styled.section`
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 100%;
	padding: 2rem 0;
`;

export const SubmitButton = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	& > textarea {
		resize: none;
		width: 60%;
		height: 4rem;
		margin-right: 1rem;
	}
	& > button {
		width: 10%;
	}
`;

export const Todolist = styled.div`
	display: flex;
	align-items: center;
	width: 72%;
	margin-top: 1rem;
	border: 1px solid black;
	.completed-button {
		font-size: 2rem;
		font-weight: 200;
		cursor: pointer;
		&.success {
			color: #19ce60;
		}
	}
	& > p {
		display: flex;

		width: 100%;
		padding: 1rem;
	}

	.modify-button {
		font-size: 2rem;
		padding-right: 0.5rem;
		color: #495057;
		cursor: pointer;
	}
	.delete-button {
		font-size: 2rem;
		color: #495057;
		cursor: pointer;
	}
`;

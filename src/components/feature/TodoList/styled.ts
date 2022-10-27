import styled, { css } from 'styled-components';

interface CompletedType {
	updateCompleted: boolean;
}

export const TodoListWrap = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	margin: 5px;

	.editIcon {
		font-size: 30px;
		margin: 0 2px;
	}
`;

export const TodoCompleted = styled.input`
	width: 25px;
	height: 25px;
	accent-color: ${({ theme }) => theme.checkBox};
`;

export const TodoListInput = styled.input`
	width: 250px;
	height: 30px;
	margin-right: 5px;
	padding: 0 10px;
	border-radius: 10px;
	border: 1px solid lightgray;
	background-color: ${({ theme }) => theme.whiteGreen};
	font-size: 13px;
	font-weight: bold;
	outline: none;
`;
export const TodoListText = styled.div`
	display: flex;
	align-items: center;
	width: 250px;
	height: 30px;
	margin-right: 5px;
	padding: 0 10px;
	border-radius: 10px;
	border: 1px solid ${({ theme }) => theme.lightGray};
	font-size: 13px;
	font-weight: bold;
	${({ updateCompleted }: CompletedType) =>
		updateCompleted &&
		css`
			color: ${({ theme }) => theme.gray};
			text-decoration: line-through;
		`}
`;
export const UpdateTodo = styled.button`
	width: 40px;
	height: 35px;
	margin-right: 5px;
	border: none;
	border-radius: 10px;
	background-color: ${({ theme }) => theme.green};
	color: ${({ theme }) => theme.white};
	:active {
		background-color: ${({ theme }) => theme.lightGreen};
	}
`;
export const DeleteTodo = styled(UpdateTodo)`
	background-color: ${({ theme }) => theme.red};
	:active {
		background-color: ${({ theme }) => theme.lightRed};
	}
`;

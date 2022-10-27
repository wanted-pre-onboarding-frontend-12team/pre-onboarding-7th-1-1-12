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
	accent-color: #27a727;
`;

export const TodoListInput = styled.input`
	width: 250px;
	height: 30px;
	margin-right: 5px;
	padding: 0 10px;
	border-radius: 10px;
	border: 1px solid lightgray;
	background-color: #486c4813;
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
	border: 1px solid lightgray;
	font-size: 13px;
	font-weight: bold;
	${({ updateCompleted }: CompletedType) =>
		updateCompleted &&
		css`
			color: gray;
			text-decoration: line-through;
		`}
`;
export const UpdateTodo = styled.button`
	width: 40px;
	height: 35px;
	margin-right: 5px;
	border: none;
	border-radius: 10px;
	background-color: #68ab68;
	color: white;
	:active {
		background-color: #68ab68be;
	}
`;
export const DeleteTodo = styled(UpdateTodo)`
	background-color: #db6161;
	:active {
		background-color: #db6161c6;
	}
`;

import styled from 'styled-components';

export const TodoWrap = styled.div`
	position: relative;
	top: 10vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100vh;
`;

export const TodoInputWrap = styled.form``;

export const TodoTitle = styled.h1`
	color: ${({ theme }) => theme.darkGreen};
`;

export const TodoInput = styled.input`
	width: 250px;
	height: 30px;
	padding: 0 10px;
	margin-right: 10px;
	margin-bottom: 30px;
	border-radius: 10px;
	border: 1px solid lightgray;
	outline: none;
	font-weight: bold;

	:focus {
		border: 1px solid darkgray;
		background-color: ${({ theme }) => theme.whiteGreen};
	}
`;

export const CreateTodoBtn = styled.button`
	width: 50px;
	height: 35px;
	border: none;
	border-radius: 10px;
	background-color: ${({ theme }) => theme.green};
	color: ${({ theme }) => theme.white};
	font-weight: bold;
	:active {
		background-color: ${({ theme }) => theme.lightGreen};
	}
`;

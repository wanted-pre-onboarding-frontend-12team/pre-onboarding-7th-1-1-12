import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { editTodo, TypeTodo } from '../../apis';
import axios from '../../apis/axios';

interface Props {
	item: TypeTodo;
	onDeleteClick: (id: string) => void;
	onEditClick: (todo: TypeTodo) => void;
}

const ToDoItem = ({ item, onDeleteClick, onEditClick }: Props) => {
	const { id, todo, isCompleted } = item;
	const [toDoState, setToDoState] = useState(todo);
	const [isChecked, setIsChecked] = useState(isCompleted);
	const [editMode, setEditMode] = useState(false);

	const onChangeEditMode = () => {
		setEditMode((prev) => !prev);
	};

	const onDelete = async (id: string) => {
		if (!window.confirm('정말 삭제하시겠습니까?')) {
			return;
		}
		const response = await axios.delete(`/todos/${id}`);
		if (response.status === 204) {
			onDeleteClick(id);
		}
	};

	const onEdit = async (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		const response = await editTodo({
			id,
			todo: toDoState,
			isChecked: isChecked,
		});

		if (response.status === 200) {
			onEditClick(response.data);
		}
	};

	return (
		<Wrapper>
			<span
				onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
					setIsChecked((isChecked) => !isChecked);
					onEdit(event);
				}}
			>
				{isCompleted ? '✅' : '⬜'}
			</span>
			{editMode ? (
				<form className="layout">
					<input
						type="text"
						defaultValue={toDoState}
						name="updateTodo"
						className="updateTodo"
						onChange={(e) => setToDoState(e.target.value)}
					></input>
					<ButtonArea>
						<button
							onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
								onEdit(event);
								onChangeEditMode;
							}}
						>
							제출
						</button>
						<button onClick={onChangeEditMode}>취소</button>
					</ButtonArea>
				</form>
			) : (
				<section className="layout">
					<ToDoText id="baseTodo">{toDoState}</ToDoText>
					<ButtonArea>
						<button onClick={onChangeEditMode}>수정</button>
						<button onClick={() => onDelete(id)}>삭제</button>
					</ButtonArea>
				</section>
			)}
		</Wrapper>
	);
};

export default ToDoItem;

const Wrapper = styled.li`
	display: flex;
	align-items: center;
	background-color: #efecef;
	border-radius: 8px;
	padding: 8px;
	margin-bottom: 7px;

	.checkbox {
		width: 15%;
	}

	.updateTodo {
		width: 75%;
	}

	.layout {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
	}
`;

const ToDoText = styled.span`
	width: 100%;
`;

const ButtonArea = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`;

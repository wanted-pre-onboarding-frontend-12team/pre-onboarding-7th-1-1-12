import { useState } from 'react';
import * as S from './styled';
import { RiPencilFill } from 'react-icons/ri';

type TodoListType = { id: number; todo: string; isCompleted: boolean; getTodos: any };

const TodoList = ({ id, todo, isCompleted, getTodos }: TodoListType) => {
	const [update, setUpdate] = useState<boolean>(false);
	const [updateTodoInput, setUpdateTodoInput] = useState<string>(todo);
	const [updateCompleted, setUpdateCompleted] = useState<boolean>(isCompleted);

	const deleteTodo = () => {
		fetch(`${import.meta.env.VITE_BASE_URL}/todos/${id}`, {
			method: 'DELETE',
			headers: {
				Authorization: `Bearer ${localStorage.getItem('TOKEN')}`,
			},
		}).then(() => getTodos());
	};

	const textUpdate = () => {
		fetch(`${import.meta.env.VITE_BASE_URL}/todos/${id}`, {
			method: 'PUT',
			headers: {
				Authorization: `Bearer ${localStorage.getItem('TOKEN')}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				todo: updateTodoInput,
				isCompleted: updateCompleted,
			}),
		})
			.then(() => getTodos())
			.then(() => setUpdate(false));
	};

	const completedUpdate = () => {
		fetch(`${import.meta.env.VITE_BASE_URL}/todos/${id}`, {
			method: 'PUT',
			headers: {
				Authorization: `Bearer ${localStorage.getItem('TOKEN')}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				todo: updateTodoInput,
				isCompleted: !updateCompleted,
			}),
		})
			.then(() => getTodos())
			.then(() => setUpdate(false));
	};

	const updateCancel = () => {
		setUpdateTodoInput(todo);
		setUpdateCompleted(isCompleted);
		setUpdate(false);
	};

	return (
		<>
			{update ? (
				<S.TodoListWrap>
					<RiPencilFill className="editIcon" />
					<S.TodoListInput type="text" onChange={(e) => setUpdateTodoInput(e.target.value)} value={updateTodoInput} autoFocus />

					<S.UpdateTodo onClick={textUpdate}>확인</S.UpdateTodo>
					<S.DeleteTodo onClick={updateCancel}>취소</S.DeleteTodo>
				</S.TodoListWrap>
			) : (
				<S.TodoListWrap>
					<S.TodoCompleted
						type="checkbox"
						defaultChecked={updateCompleted}
						onChange={() => {
							setUpdateCompleted(!updateCompleted);
							completedUpdate();
						}}
					/>
					<S.TodoListText updateCompleted={updateCompleted}>{todo} </S.TodoListText>
					<S.UpdateTodo onClick={() => setUpdate(true)}>수정</S.UpdateTodo>
					<S.DeleteTodo onClick={deleteTodo}>삭제</S.DeleteTodo>
				</S.TodoListWrap>
			)}
		</>
	);
};

export default TodoList;

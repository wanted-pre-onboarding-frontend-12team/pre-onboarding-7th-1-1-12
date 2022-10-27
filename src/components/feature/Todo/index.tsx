import { useState } from 'react';
import { TodoDiv } from './styled';
import { TodosProps } from '../../../\butils/interfaces';

const Todo = ({ todo, deleteTodo, updateTodo }: TodosProps) => {
	const [editMode, setEditMode] = useState<boolean>(false);
	const [newTodo, setNewTodo] = useState<string>({ ...todo }.todo);
	const [newCheck, setNewCheck] = useState<boolean>(todo.isCompleted);

	const changeTodo = async () => {
		if (newTodo !== '' && newTodo !== todo.todo) {
			if (todo.isCompleted !== newCheck) {
				await updateTodo(todo.id, newTodo, newCheck);
				setEditMode(false);
			} else {
				await updateTodo(todo.id, newTodo, todo.isCompleted);
				setEditMode(false);
			}
		} else if (newTodo !== '' && newTodo === todo.todo) {
			if (todo.isCompleted !== newCheck) {
				await updateTodo(todo.id, todo.todo, newCheck);
				setEditMode(false);
			} else {
				alert('변경사항이 없습니다!');
			}
		}
	};

	return (
		<TodoDiv>
			{editMode ? (
				<div>
					<input type="checkbox" checked={newCheck} onChange={(e) => setNewCheck((prev) => !prev)} />
					<input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
					<div className="btnDiv">
						<button onClick={changeTodo} disabled={todo.isCompleted === newCheck && newTodo === todo.todo}>
							완료
						</button>
						<button onClick={() => setEditMode(false)}>취소</button>
					</div>
				</div>
			) : (
				<div>
					{todo.isCompleted ? <p className="completeCheckbox">완료</p> : <p className="notcompleteCheckbox">미완</p>}
					<p>{todo.todo}</p>
					<div className="btnDiv">
						<button onClick={() => setEditMode(true)}>수정</button>
						<button onClick={() => deleteTodo(todo.id)}>삭제</button>
					</div>
				</div>
			)}
		</TodoDiv>
	);
};

export default Todo;

import { useState } from 'react';
import { ListLayout, ItemLayout, Btn } from './styled';
import { TodosProps } from '../../../utils/interfaces';

const Todo = ({ todo, deleteTodo, updateTodo }: TodosProps) => {
	const [editMode, setEditMode] = useState<boolean>(false);
	const [newTodo, setNewTodo] = useState<string>({ ...todo }.todo);
	const [newCheck, setNewCheck] = useState<boolean>(todo.isCompleted);

	const changeTodo = async () => {
		if (newTodo !== '' && newTodo !== todo.todo) {
			if (newTodo !== '' && newTodo === todo.todo) {
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

	const checkTodo = async () => {
		if (!editMode) {
			await updateTodo(todo.id, newTodo, newCheck);
		}
	};

	return (
		<ListLayout>
			<ItemLayout>
				<Btn
					onClick={() => {
						setNewCheck((prev) => !prev);
						checkTodo();
						console.log(todo.isCompleted, '클릭여부확인');
					}}
					disabled={editMode}
				>
					{todo.isCompleted ? <p>✅</p> : <p>⬜</p>}
				</Btn>
				{editMode ? (
					<>
						<input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
						<div>
							<Btn onClick={changeTodo} disabled={todo.isCompleted === newCheck && newTodo === todo.todo}>
								완료
							</Btn>
							<Btn onClick={() => setEditMode(false)}>취소</Btn>
						</div>
					</>
				) : (
					<>
						<p>{todo.todo}</p>
						<div>
							<Btn onClick={() => setEditMode(true)}>수정</Btn>
							<Btn onClick={() => deleteTodo(todo.id)}>삭제</Btn>
						</div>
					</>
				)}
			</ItemLayout>
		</ListLayout>
	);
};

export default Todo;

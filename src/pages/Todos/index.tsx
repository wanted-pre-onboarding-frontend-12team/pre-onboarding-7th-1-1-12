import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { TodosDiv } from './styled';
import Todo from '../../components/feature/Todo';
import useTodos from './useTodos';

const Todos = () => {
	const navigate = useNavigate();
	const isLogged = localStorage.getItem('accessToken');
	const { getTodos, addTodo, updateTodo, deleteTodo, todoList, newTodo, setNewTodo } = useTodos();

	useEffect(() => {
		if (isLogged) {
			getTodos();
		} else {
			navigate('/');
		}
	}, []);

	const Logout = () => {
		localStorage.removeItem('accessToken');
		navigate('/');
	};

	return (
		<TodosDiv>
			<h1>투두 리스트</h1>
			<div className="createTodo">
				<input
					type="text"
					placeholder="해야할 일을 적어주세요~"
					value={newTodo}
					onChange={(e) => {
						setNewTodo(e.currentTarget.value);
					}}
				/>
				<button disabled={newTodo.length === 0} onClick={addTodo}>
					추가하기
				</button>
			</div>
			{todoList.length > 0 && (
				<div className="todoList">
					{todoList.map((todo) => (
						<Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo} />
					))}
				</div>
			)}

			<button className="logoutBtn" onClick={Logout}>
				로그아웃
			</button>
		</TodosDiv>
	);
};
export default Todos;

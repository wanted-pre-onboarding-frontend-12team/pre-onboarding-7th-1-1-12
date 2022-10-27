import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { TodosLayout } from './styled';
import Todo from '../../components/feature/Todo';
import useTodos from './useTodos';
import Header from '../../components/shared/header';
import AddTodoForm from '../../components/feature/AddTodoForm';

const Todos = () => {
	const navigate = useNavigate();
	const { getTodos, addTodo, updateTodo, deleteTodo, todoList, newTodo, setNewTodo } = useTodos();

	useEffect(() => {
		if (localStorage.getItem('accessToken')) {
			getTodos();
		} else {
			navigate('/');
		}
	}, [todoList]);

	return (
		<TodosLayout>
			<Header />
			<AddTodoForm />
			{todoList.length > 0 && (
				<div className="todoList">
					{todoList.map((todo) => (
						<Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo} />
					))}
				</div>
			)}
		</TodosLayout>
	);
};
export default Todos;

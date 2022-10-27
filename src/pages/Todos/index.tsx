import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { TodosLayout } from './styled';
import Todo from '../../components/feature/Todo';
import useTodos from './useTodos';
import Header from '../../components/shared/header';
import AddTodoForm from '../../components/feature/AddTodoForm';

const Todos = () => {
	const { getTodos, addTodo, updateTodo, deleteTodo, todoList, newTodo, setNewTodo } = useTodos();

	return (
		<TodosLayout>
			<Header />
			<AddTodoForm addTodo={addTodo} newTodo={newTodo} setNewTodo={setNewTodo} />
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

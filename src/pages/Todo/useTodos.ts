import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createTodo, deleteTodo, getTodos, updateTodo } from '../../apis/todo';
import { Todo } from '../../types/todo';
import { getLocalStorageItem, KEYS } from '../../utils/storage';

const useTodos = () => {
	const navigator = useNavigate();
	const [todos, setTodos] = useState<Todo[]>([]);

	const onGetTodos = async () => {
		try {
			const { data: todos } = await getTodos();
			setTodos(todos);
		} catch (error) {
			console.error('Get Todos Error !');
		}
	};

	const onCreateNewTodoSubmit = async (newTodo: string) => {
		try {
			await createTodo(newTodo);
			await onGetTodos();
		} catch (error) {
			console.error('Create Todo Error !');
		}
	};

	const onTodoCompletedToggle = async (targetTodo: Todo) => {
		try {
			await updateTodo(targetTodo);
			await onGetTodos();
		} catch (error) {
			console.error('Update Todo Completed Error !');
		}
	};

	const onTodoItemEdit = async (targetTodo: Todo, newTodo: string) => {
		try {
			await updateTodo(targetTodo, newTodo);
			await onGetTodos();
		} catch (error) {
			console.error('Update Todo Content Error !');
		}
	};

	const onTodoItemDelete = async (targetTodo: Todo) => {
		try {
			await deleteTodo(targetTodo);
			await onGetTodos();
		} catch (error) {
			console.error('Delete Todo Error !');
		}
	};

	useEffect(() => {
		if (!getLocalStorageItem(KEYS.WANTED_ACCESS_TOKEN)) {
			navigator('/');
		} else {
			onGetTodos();
		}
	}, []);

	return { todos, onCreateNewTodoSubmit, onTodoCompletedToggle, onTodoItemEdit, onTodoItemDelete };
};

export default useTodos;

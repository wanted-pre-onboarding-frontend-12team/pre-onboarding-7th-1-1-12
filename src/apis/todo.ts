import { DELETE, GET, PATH, POST, PUT } from '../constants/api';
import { Todo } from '../types/todo';
import { requester } from './requester';

export const createTodo = async (newTodo: string) => {
	const {
		todos: { index },
	} = PATH;

	const { data, status } = await requester<Todo>({
		method: POST,
		url: `${index}`,
		data: { todo: newTodo },
	});

	return { status, data };
};

export const getTodos = async () => {
	const {
		todos: { index },
	} = PATH;

	const { data, status } = await requester<Todo[]>({
		method: GET,
		url: `${index}`,
	});

	return { status, data };
};

export const updateTodo = async (targetTodo: Todo, newTodo?: string) => {
	const {
		todos: { index },
	} = PATH;

	const { data, status } = await requester<Todo>({
		method: PUT,
		url: `${index}/${targetTodo.id}`,
		data: {
			todo: newTodo ?? targetTodo.todo,
			isCompleted: newTodo ? targetTodo.isCompleted : !targetTodo.isCompleted,
		},
	});

	return { status, data };
};

export const deleteTodo = async (targetTodo: Todo) => {
	const {
		todos: { index },
	} = PATH;

	const { data, status } = await requester({
		method: DELETE,
		url: `${index}/${targetTodo.id}`,
	});

	return { status, data };
};

import axios from './axios';

import { setToken } from '../utils/localStorage';

export const requestSignIn = async (values: { email: string; password: string }) => {
	const response = await axios.post<{ access_token: string }>('/auth/signin', values);
	if (response.status === 200) {
		setToken(response.data.access_token);
	}
	return response;
};

export const requestSignUp = async (values: { email: string; password: string }) => {
	const response = await axios.post<{ access_token: string }>('/auth/signup', values);
	if (response.status === 200) {
		setToken(response.data.access_token);
	}
	return response;
};

export type TypeTodo = {
	id: string;
	todo: string;
	isCompleted: boolean;
	userId: string;
};

export const getTodos = async () => {
	const response = await axios.get<TypeTodo[]>('/todos');
	return response;
};

export const postTodo = async (todoText: string) => {
	const response = await axios.post<TypeTodo>('/todos', {
		todo: todoText,
	});
	return response;
};

export const editTodo = async ({ id, todo, isChecked }: { id: string; todo: string; isChecked: boolean }) => {
	const response = await axios.put<TypeTodo>(`/todos/${id}`, {
		todo: todo,
		isCompleted: isChecked,
	});
	return response;
};

export const deleteTodo = async (id: string) => {
	const response = await axios.delete(`todos/${id}`);
	return response;
};

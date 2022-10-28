import axios from 'axios';
import { api } from './requester';

export const getTodos = async (setTodolist: any) => {
	await api.get(`/todos`).then((res) => setTodolist(res.data));
};

export const postTodo = async (todo: string) => {
	const res = await api.post(`/todos`, { todo });
	return res.data;
};

export const putTodo = async (id: number, todo: string, isCompleted: boolean) => {
	const res = await api.put(`/todos/${id}`, {
		todo: todo,
		isCompleted: !isCompleted,
	});
	return res.data;
};

export const deleteTodo = async (id: number) => {
	const res = await api.delete(`/todos/${id}`);
	return res.data;
};

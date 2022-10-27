import { api } from './requester';

export const todoApi = {
	getTodos() {
		return api.get('/todos');
	},
	createTodo(todo: string) {
		return api.post('/todos', { todo });
	},
	updateTodo(id: number, todo: string, isCompleted: boolean) {
		return api.put(`/todos/${id}`, { todo, isCompleted });
	},
	deleteTodo(id: number) {
		return api.delete(`/todos/${id}`);
	},
};

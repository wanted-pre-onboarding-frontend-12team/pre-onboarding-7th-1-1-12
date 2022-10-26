import axios from 'axios';
const URL = 'https://pre-onboarding-selection-task.shop/todos';

export const getTodos = async (setTodolist: any) => {
	await axios
		.get(`${URL}`, {
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`,
			},
		})
		.then((res) => setTodolist(res.data))
		.catch((err) => console.log(err));
};

export const postTodo = async (todo: string) => {
	const res = await axios.post(
		`${URL}`,
		{ todo: todo },
		{
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('token')}`,
			},
		},
	);
	return res.data;
};

export const putTodo = async (id: number, todo: string, isCompleted: boolean) => {
	const res = await axios.put(
		`${URL}/${id}`,
		{
			todo: todo,
			isCompleted: !isCompleted,
		},
		{
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('token')}`,
			},
		},
	);
	return res.data;
};

export const deleteTodo = async (id: number) => {
	const res = await axios.delete(`${URL}/${id}`, {
		headers: {
			Authorization: `Bearer ${localStorage.getItem('token')}`,
		},
	});
	return res.data;
};

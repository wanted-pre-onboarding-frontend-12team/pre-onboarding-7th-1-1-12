import { useState, useEffect } from 'react';
import { AxiosResponse } from 'axios';

import { todoApi } from '../../apis/todo';
import { TodoResponse } from '../../utils/interfaces';
import { useNavigate } from 'react-router-dom';

const useTodos = () => {
	const [todoList, setTodoList] = useState<TodoResponse[]>([]);
	const [newTodo, setNewTodo] = useState<string>('');
	const navigate = useNavigate();

	const getTodos = async () => {
		let res: AxiosResponse;
		try {
			res = await todoApi.getTodos();
			setTodoList(res.data);
		} catch (err) {
			alert(err);
		}
	};

	const addTodo = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (newTodo.length === 0) {
			return;
		}
		try {
			const res = await todoApi.createTodo(newTodo);
			const addedTodo: TodoResponse = res.data;
			setTodoList([...todoList, addedTodo]);
			alert('새로운 할일 등록완료!');
		} catch (err) {
			alert('등록에 실패하였습니다');
		}
		setNewTodo('');
	};

	const updateTodo = async (id: number, todo: string, isCompleted: boolean) => {
		try {
			const res = await todoApi.updateTodo(id, todo, isCompleted);
			let newtodo = todoList.map((todo) => (todo.id === id ? res.data : todo));
			setTodoList(newtodo);
		} catch (err) {
			alert(err);
		}
	};

	const deleteTodo = async (id: number) => {
		const result = window.confirm('TODO를 삭제하시겠습니까?');
		if (result) {
			try {
				await todoApi.deleteTodo(id);
				setTodoList(todoList.filter((select) => select.id !== id));
				alert('삭제 완료!');
			} catch (err) {
				alert(err);
			}
		}
	};

	useEffect(() => {
		if (localStorage.getItem('accessToken')) {
			getTodos();
		} else {
			navigate('/');
		}
	}, []);

	return {
		getTodos,
		addTodo,
		updateTodo,
		deleteTodo,
		todoList,
		newTodo,
		setNewTodo,
	};
};

export default useTodos;

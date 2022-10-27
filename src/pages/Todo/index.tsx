import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styled';
import TodoList from '../../components/feature/TodoList/index';

type TodoListType = { id: number; todo: string; isCompleted: boolean };

const Todo = () => {
	const [todoInput, setTodoInput] = useState<string>('');
	const [todoList, setTodoList] = useState<TodoListType[]>([]);
	const navigate = useNavigate();

	const getTodos = () => {
		fetch(`${import.meta.env.VITE_BASE_URL}/todos`, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${localStorage.getItem('TOKEN')}`,
			},
		})
			.then((res) => res.json())
			.then((data) => {
				setTodoList(data.reverse());
			});
	};

	const createTodo = (e: any) => {
		e.preventDefault();
		fetch(`${import.meta.env.VITE_BASE_URL}/todos`, {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${localStorage.getItem('TOKEN')}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ todo: todoInput }),
		}).then(() => {
			getTodos();
			setTodoInput('');
		});
	};

	useEffect(() => {
		if (!localStorage.getItem('TOKEN')) {
			navigate('/');
			alert('❌ 로그인을 먼저 해주세요.');
		}
		getTodos();
	}, [navigate]);

	return (
		<S.TodoWrap>
			<S.TodoTitle>투 두 리스트</S.TodoTitle>
			<S.TodoInputWrap onSubmit={createTodo}>
				<S.TodoInput value={todoInput} onChange={(e) => setTodoInput(e.target.value)} autoFocus />
				<S.CreateTodoBtn>추가</S.CreateTodoBtn>
			</S.TodoInputWrap>
			{todoList?.map((item) => {
				return <TodoList key={item.id} id={item.id} todo={item.todo} isCompleted={item.isCompleted} getTodos={getTodos} />;
			})}
		</S.TodoWrap>
	);
};

export default Todo;

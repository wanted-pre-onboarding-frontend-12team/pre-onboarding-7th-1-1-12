import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { TodoResponse } from '../../\butils/interfaces';
import { todoApi } from '../../apis/todo';
import { TodosDiv } from './styled';
import Todo from '../../components/feature/Todo';

const Todos = () => {
	const navigate = useNavigate();
	const [newTodo, setNewTodo] = useState<string>('');
	const [todoList, setTodoList] = useState<TodoResponse[]>([]);
	const [isValid, setIsValid] = useState<boolean>(false);
	const isLogged = localStorage.getItem('accessToken');

	const getTodos = async () => {
		let res: AxiosResponse;
		try {
			res = await todoApi.getTodos();
			setTodoList(res.data);
			console.log(res);
		} catch (err) {
			alert(err);
		}
	};

	useEffect(() => {
		getTodos();
	}, []);

	const addTodo = async (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();
		if (newTodo.length > 0) {
			try {
				const res = await todoApi.createTodo(newTodo);
				const addedTodo: TodoResponse = res.data;
				setTodoList([...todoList, addedTodo]);
				alert('새로운 할일 등록완료!');
			} catch (err) {
				alert('등록에 실패하였습니다');
				console.log(err);
			}
			setNewTodo('');
		}
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

	const Logout = () => {
		localStorage.removeItem('accessToken');
		navigate('/');
	};

	return (
		<TodosDiv>
			<h1>투두 리스트</h1>
			{!isLogged && <Navigate to="/" />}
			<div className="createTodo">
				<input
					type="text"
					placeholder="해야할 일을 적어주세요~"
					value={newTodo}
					onChange={(e) => {
						setNewTodo(e.currentTarget.value);
					}}
					onKeyUp={(e) => {
						e.currentTarget.value.length > 0 ? setIsValid(true) : setIsValid(false);
					}}
				/>
				<button disabled={!isValid} onClick={addTodo}>
					추가하기
				</button>
			</div>
			{todoList.length > 0 && (
				<div className="todoList">
					{todoList.map((todo) => (
						<Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo} />
					))}
				</div>
			)}

			<button className="logoutBtn" onClick={Logout}>
				로그아웃
			</button>
		</TodosDiv>
	);
};
export default Todos;

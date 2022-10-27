import { useEffect, useState } from 'react';
import { getTodos, TypeTodo } from '../../apis';

const useTodos = () => {
	const [todos, setTodos] = useState<TypeTodo[]>([]);

	const updateAfterSubmit = (submittedTodo: TypeTodo) => {
		setTodos([...todos, submittedTodo]);
	};

	const updateAfterEdit = (editedTodo: TypeTodo) => {
		const index = todos.findIndex((todo) => todo.id === editedTodo.id);
		todos.splice(index, 1, editedTodo);
		setTodos([...todos]);
	};

	const updateAfterDelete = (id: string) => {
		const newTodos = todos.filter((todo) => todo.id !== id);
		setTodos([...newTodos]);
	};

	useEffect(() => {
		const getPosts = async () => {
			const response = await getTodos();
			if (response.status === 200) {
				setTodos(response.data);
			}
		};
		getPosts();
	}, []);

	return {
		todos,
		updateAfterSubmit,
		updateAfterEdit,
		updateAfterDelete,
	};
};

export default useTodos;

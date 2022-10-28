import { useState } from 'react';

type Props = {
	onCreateNewTodoSubmit: (newTodo: string) => void;
};

const useTodoInputForm = (props: Props) => {
	const [newTodo, setNewTodo] = useState('');

	const handleNewTodoInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (!(event.currentTarget instanceof HTMLInputElement)) return;
		setNewTodo(event.currentTarget.value);
	};

	const handleCreateNewTodoSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		props.onCreateNewTodoSubmit(newTodo);
		setNewTodo('');
	};

	return { newTodo, handleNewTodoInput, handleCreateNewTodoSubmit };
};

export default useTodoInputForm;

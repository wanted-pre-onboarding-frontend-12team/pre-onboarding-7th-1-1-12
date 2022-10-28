import { useState } from 'react';
import { Todo } from '../../../types/todo';

type Props = {
	todo: Todo;
	onTodoCompletedToggle: (targetTodo: Todo) => void;
	onTodoItemEdit: (targetTodo: Todo, newTodo: string) => void;
	onTodoItemDelete: (targetTodo: Todo) => void;
};

const useTodoItem = (props: Props) => {
	const [isEditMode, setIsEditMode] = useState(false);
	const [todo, setTodo] = useState(props.todo.todo);

	const onTodoItemCompletedButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		props.onTodoCompletedToggle(props.todo);
	};

	const onIsEditModeToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
		setIsEditMode(!isEditMode);
	};

	const onTodoItemChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTodo(event.currentTarget.value);
	};

	const onTodoItemEditSubmitClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		props.onTodoItemEdit(props.todo, todo);
		setIsEditMode(!isEditMode);
	};

	const onTodoItemDeleteButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		props.onTodoItemDelete(props.todo);
	};

	return {
		isEditMode,
		todo,
		onTodoItemCompletedButtonClick,
		onIsEditModeToggle,
		onTodoItemChange,
		onTodoItemEditSubmitClick,
		onTodoItemDeleteButtonClick,
	};
};

export default useTodoItem;

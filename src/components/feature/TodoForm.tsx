import { useRef } from 'react';

import { postTodo, TypeTodo } from '../../apis';

interface Props {
	onTodoSubmit: (todo: TypeTodo) => void;
}

const ToDoForm = ({ onTodoSubmit }: Props) => {
	const inputRef = useRef<HTMLInputElement>(null);

	const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const response = await postTodo(inputRef.current!.value);

		if (response.status === 201) {
			onTodoSubmit(response.data);
			inputRef.current!.value = '';
			inputRef.current!.focus();
		}
	};

	return (
		<form onSubmit={onSubmit}>
			<input ref={inputRef} type="text" name="newTodo" id="newTodo" />
			<button type="submit">추가</button>
		</form>
	);
};

export default ToDoForm;

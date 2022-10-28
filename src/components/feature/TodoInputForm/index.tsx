import * as S from './styled';
import { Input, Button } from '../../';
import useTodoInputForm from './useTodoInputForm';

type Props = {
	onCreateNewTodoSubmit: (newTodo: string) => void;
};

const TodoInputForm = (props: Props) => {
	const { newTodo, handleNewTodoInput, handleCreateNewTodoSubmit } = useTodoInputForm({
		onCreateNewTodoSubmit: props.onCreateNewTodoSubmit,
	});

	return (
		<S.TodoInputForm onSubmit={handleCreateNewTodoSubmit}>
			<Input type="text" placeholder="할 일을 입력하세요." value={newTodo} onChange={handleNewTodoInput} />
			<Button type="submit" disabled={!newTodo}>
				추가
			</Button>
		</S.TodoInputForm>
	);
};

export default TodoInputForm;

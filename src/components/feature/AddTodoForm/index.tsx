import useTodos from '../../../pages/Todos/useTodos';
import { AddLayout } from './styled';

const AddTodoForm = () => {
	const { addTodo, newTodo, setNewTodo } = useTodos();

	return (
		<AddLayout>
			<input
				type="text"
				placeholder="해야할 일을 적어주세요~"
				value={newTodo}
				onChange={(e) => {
					setNewTodo(e.currentTarget.value);
				}}
			/>
			<button disabled={newTodo.length === 0} onClick={addTodo}>
				추가하기
			</button>
		</AddLayout>
	);
};

export default AddTodoForm;

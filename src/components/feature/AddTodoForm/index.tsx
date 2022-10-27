import useTodos from '../../../pages/Todos/useTodos';
import { AddLayout } from './styled';

import { AddTodoProps } from '../../../utils/interfaces';

const AddTodoForm = ({ addTodo, newTodo, setNewTodo }: AddTodoProps) => {
	return (
		<AddLayout onSubmit={addTodo}>
			<input
				type="text"
				placeholder="해야할 일을 적어주세요~"
				value={newTodo}
				onChange={(e) => {
					setNewTodo(e.currentTarget.value);
				}}
			/>
			<button type="submit" disabled={newTodo.length === 0}>
				추가하기
			</button>
		</AddLayout>
	);
};

export default AddTodoForm;

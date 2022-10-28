import * as S from './styled';
import Layout from '../../components/layout';
import { TodoInputForm, TodoItem } from '../../components';
import useTodos from './useTodos';

const TodoApp = () => {
	const { todos, onCreateNewTodoSubmit, onTodoCompletedToggle, onTodoItemEdit, onTodoItemDelete } = useTodos();

	return (
		<Layout>
			<S.Container>
				<TodoInputForm onCreateNewTodoSubmit={onCreateNewTodoSubmit} />
				{todos.length >= 0 && (
					<S.TodoList>
						{todos.map((todo) => (
							<TodoItem
								key={todo.id}
								todo={todo}
								onTodoCompletedToggle={onTodoCompletedToggle}
								onTodoItemEdit={onTodoItemEdit}
								onTodoItemDelete={onTodoItemDelete}
							/>
						))}
					</S.TodoList>
				)}
			</S.Container>
		</Layout>
	);
};

export default TodoApp;

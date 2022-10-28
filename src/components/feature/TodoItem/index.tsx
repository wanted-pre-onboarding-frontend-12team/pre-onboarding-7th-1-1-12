import * as S from './styled';
import { Button, Input } from '../../';
import { theme } from '../../../styles';
import { Todo } from '../../../types/todo';
import useTodoItem from './useTodoItem';

type Props = {
	todo: Todo;
	onTodoCompletedToggle: (targetTodo: Todo) => void;
	onTodoItemEdit: (targetTodo: Todo, newTodo: string) => void;
	onTodoItemDelete: (targetTodo: Todo) => void;
};

const TodoItem = (props: Props) => {
	const {
		isEditMode,
		todo,
		onTodoItemCompletedButtonClick,
		onIsEditModeToggle,
		onTodoItemChange,
		onTodoItemEditSubmitClick,
		onTodoItemDeleteButtonClick,
	} = useTodoItem({
		todo: props.todo,
		onTodoCompletedToggle: props.onTodoCompletedToggle,
		onTodoItemEdit: props.onTodoItemEdit,
		onTodoItemDelete: props.onTodoItemDelete,
	});

	return (
		<S.Container isEditMode={isEditMode}>
			{!isEditMode && (
				<S.TodoItemCompletedWrapper>
					<Button type="button" backgroundColor={theme.colors.yellow} onClick={onTodoItemCompletedButtonClick}>
						{props.todo.isCompleted ? '✅' : '🚴🏻‍♂️'}
					</Button>
				</S.TodoItemCompletedWrapper>
			)}
			{isEditMode ? (
				<S.TodoItemContentWrapper>
					<Input type="text" placeholder="할 일을 채워주세요." value={todo} onChange={onTodoItemChange} />
				</S.TodoItemContentWrapper>
			) : (
				<S.TodoItemContentWrapper>{props.todo.todo}</S.TodoItemContentWrapper>
			)}
			{isEditMode ? (
				<S.TodoItemButtonWrapper>
					<Button type="button" onClick={onIsEditModeToggle}>
						취소
					</Button>
					<Button type="button" backgroundColor={theme.colors.green} onClick={onTodoItemEditSubmitClick}>
						제출
					</Button>
				</S.TodoItemButtonWrapper>
			) : (
				<S.TodoItemButtonWrapper>
					<Button type="button" onClick={onIsEditModeToggle}>
						수정
					</Button>
					<Button type="button" backgroundColor={theme.colors.red} onClick={onTodoItemDeleteButtonClick}>
						삭제
					</Button>
				</S.TodoItemButtonWrapper>
			)}
		</S.Container>
	);
};

export default TodoItem;

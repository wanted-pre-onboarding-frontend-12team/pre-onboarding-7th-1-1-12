export interface TodoResponse {
	id: number;
	todo: string;
	isCompleted: boolean;
	userId: number;
}

export interface TodosProps {
	todo: TodoResponse;
	deleteTodo: (id: number) => void;
	updateTodo: (id: number, todo: string, isCompleted: boolean) => void;
}

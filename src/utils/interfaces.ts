import React from 'react';

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

export interface AddTodoProps {
	newTodo: string;
	setNewTodo: (todo: string) => void;
	addTodo: (e: React.FormEvent<HTMLFormElement>) => void;
}

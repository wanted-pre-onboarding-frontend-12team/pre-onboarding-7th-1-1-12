import React, { useEffect, useState } from 'react';

import { getTodos, TypeTodo } from '../../apis';
import ToDoForm from '../../components/feature/TodoForm';
import ToDoItem from '../../components/feature/TodoItem';
import { Wrapper } from './styled';
import useTodos from '../../components/shared/useTodos';

export default function Todo() {
	const { todos, updateAfterSubmit, updateAfterEdit, updateAfterDelete } = useTodos();

	return (
		<Wrapper>
			<ToDoForm onTodoSubmit={updateAfterSubmit} />
			<ul>
				{todos &&
					todos.map((todo) => {
						return <ToDoItem key={todo.id} item={todo} onDeleteClick={updateAfterDelete} onEditClick={updateAfterEdit} />;
					})}
			</ul>
		</Wrapper>
	);
}

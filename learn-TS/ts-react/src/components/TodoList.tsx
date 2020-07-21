import React from "react";
import { Todo } from "./types";

import "./TodoList.css";

export interface TodoListProps {
	todos: Todo[];
	onDeleteTodo: (todoId: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onDeleteTodo }) => {
	return (
		<ul>
			{todos.map((todo: Todo) => (
				<li key={todo.id}>
					<span>{todo.text}</span>
					<button onClick={onDeleteTodo.bind(null, todo.id)}>DELETE</button>
				</li>
			))}
		</ul>
	);
};

export default TodoList;

import React, { useState } from "react";
import { Todo } from "./components/types";

import { TodoList, AddTodo } from "./components";

const App: React.FC = () => {
	const [todos, setTodos] = useState<Todo[]>([]);

	const todoAddHandler = (text: string) => {
		setTodos((prevTodos) => [...prevTodos, { id: Math.random(), text: text }]);
	};

	const todoDeleteHandler = (todoId: number) => {
		setTodos((prevTodo) => {
			return prevTodo.filter((todo) => todo.id !== todoId);
		});
	};

	return (
		<div className='App'>
			<AddTodo onAddTodo={todoAddHandler} />
			<TodoList todos={todos} onDeleteTodo={todoDeleteHandler} />
		</div>
	);
};

export default App;

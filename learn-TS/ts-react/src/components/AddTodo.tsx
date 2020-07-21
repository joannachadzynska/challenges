import React, { useRef } from "react";

import "./AddTodo.css";

export interface AddTodoProps {
	onAddTodo: (text: string) => void;
}

const AddTodo: React.SFC<AddTodoProps> = ({ onAddTodo }) => {
	const inputRef = useRef<HTMLInputElement>(null);

	const todoSubmitHandler = (e: React.FormEvent) => {
		e.preventDefault();
		const enteredText = inputRef.current!.value;
		onAddTodo(enteredText);
		inputRef.current!.value = "";
	};

	return (
		<form onSubmit={todoSubmitHandler}>
			<div className='form-control'>
				<label htmlFor='todo'>Todo Description</label>
				<input type='text' name='todo' id='todo' ref={inputRef} />
			</div>

			<button type='submit'>Add Todo</button>
		</form>
	);
};

export default AddTodo;

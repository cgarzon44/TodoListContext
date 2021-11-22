import React from "react";
import { Context } from "../store/appContext.js";
import ToDoForm from "./ToDoForm.js";
import ToDo from "./ToDo.js";
import ToDoCounter from "./ToDoCounter.js";
import ToDoListHeader from "./ToDoHeader.js";

export const ToDoList = props => {
	const { addTodo, addUser } = React.useContext(Context);

	return (
		<>
			<div className="custom-container row bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center">
				<ToDoListHeader />
				<ToDoForm onSubmit={addTodo} />
				<ToDoCounter />
				<ToDo />
			</div>
		</>
	);
};

export default ToDoList;

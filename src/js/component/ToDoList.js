import React from "react";
import { Context } from "../store/appContext.js";
import ToDoForm from "./ToDoForm.js";
import ToDo from "./ToDo.js";
import ToDoCounter from "./ToDoCounter.js";
import ToDoListHeader from "./ToDoHeader.js";
import UserForm from "./UserForm/Userform.js";
import NewUser from "./UserForm/NewUser.js";

export const ToDoList = props => {
	const { addTodo } = React.useContext(Context);

	return (
		<>
			<UserForm onSubmit={addTodo} />
			<NewUser />

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

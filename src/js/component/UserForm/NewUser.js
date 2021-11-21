import React, { useState } from "react";
import { Context } from "../../store/appContext.js";

//create your first component

function NewUser(props) {
	const { todos, completeTodo, removeTodo } = React.useContext(Context);

	const [isShownHoverContent, setIsShownHoverContent] = useState(-1);

	return todos.map(todo => (
		<div
			className="d-flex"
			key={todo.id}
			onMouseEnter={() => setIsShownHoverContent(todo.id)}
			onMouseLeave={() => setIsShownHoverContent(-1)}>
			<div className="p-2 w-100">
				<ul
					className={todo.isComplete ? "list-group list-group-flush complete" : "list-group list-group-flush"}
					onClick={() => completeTodo(todo.id)}>
					<li className="list-group-item">{todo.text}</li>
				</ul>
			</div>

			<div>
				<i
					onClick={() => removeTodo(todo.id)}
					className={
						isShownHoverContent === todo.id
							? "fas fa-times p-2 flex-shrink-1 "
							: "fas fa-times p-2 flex-shrink-1 hide"
					}
				/>
			</div>
		</div>
	));
}

export default NewUser;

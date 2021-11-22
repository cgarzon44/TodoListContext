import React, { useState } from "react";
import { Context } from "../../store/appContext.js";

//create your first component

function NewUser(props) {
	const { users, completeTodo, removeUser } = React.useContext(Context);

	const [isShownHoverContent, setIsShownHoverContent] = useState(-1);

	return users.map(user => (
		<div
			className="d-flex"
			key={user.id}
			onMouseEnter={() => setIsShownHoverContent(user.id)}
			onMouseLeave={() => setIsShownHoverContent(-1)}>
			<div className="p-2 w-100">
				<ul
					className={user.isComplete ? "list-group list-group-flush complete" : "list-group list-group-flush"}
					onClick={() => completeTodo(user.id)}>
					<li className="list-group-item">{user.text}</li>
				</ul>
			</div>

			<div>
				<i
					onClick={() => removeUser(user.id)}
					className={
						isShownHoverContent === user.id
							? "fas fa-times p-2 flex-shrink-1 "
							: "fas fa-times p-2 flex-shrink-1 hide"
					}
				/>
			</div>
		</div>
	));
}

export default NewUser;

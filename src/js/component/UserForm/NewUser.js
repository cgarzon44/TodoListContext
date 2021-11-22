import React, { useState } from "react";
import { Context } from "../../store/appContext.js";

//create your first component

function NewUser(props) {
	const { users, completeTodo, removeUser } = React.useContext(Context);

	const [isShownHoverContent, setIsShownHoverContent] = useState(-1);

	return users.map(user => (
		<div key={user.id} className="d-flex">
			<div className="p-2 w-100">
				<ul>
					<li className="list-group-item">{user.text}</li>
				</ul>
			</div>
			<div>
				<i onClick={() => removeUser(users)} className="fas fa-user-times" />
			</div>
		</div>
	));
}

export default NewUser;

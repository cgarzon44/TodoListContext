import React from "react";
import PropTypes from "prop-types";
import "../../styles/home.scss";
import { Context } from "../store/appContext.js";

export const ToDoList = props => {
	{
		const { todos } = React.useContext(Context);

		console.log({ todos });

		return <div>{todos}</div>;
	}
};
export default ToDoList;

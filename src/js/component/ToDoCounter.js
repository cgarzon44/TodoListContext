import React from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js";

function ToDoCounter(props) {
	const { todos } = React.useContext(Context);

	if (todos.length == 0) {
		return <p className="counter">No tasks, add your first task!</p>;
	} else if (todos.length == 1) {
		return <p className="counter">You have 1 task, You have one thing to do! </p>;
	} else if ((todos.length >= 2, todos.length <= 4)) {
		return <p className="counter">You have {todos.length} tasks, You have a few things to do!</p>;
	} else if ((todos.length >= 5, todos.length <= 9)) {
		return <p className="counter">You have {todos.length} tasks. You many things to do!</p>;
	} else if (todos.length >= 10) {
		return <p className="counter">You have {todos.length} tasks. You have A lot to do!</p>;
	}
}

ToDoCounter.propTypes = {
	todos: PropTypes.array
};

export default ToDoCounter;

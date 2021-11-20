import React from "react";
import PropTypes from "prop-types";
import "../../styles/home.scss";
import { Context, withGlobalState } from "../store/appContext.js";
import ToDoList from "../component/ToDoList.js";

export const ToDoListViews = props => {
	return (
		<>
			<ToDoList />
		</>
	);
};

ToDoListViews.propTypes = {
	match: PropTypes.object
};

export default withGlobalState(ToDoList);

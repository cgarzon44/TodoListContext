import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

//create your first component

function ToDoForm(props) {
	const [input, setInput] = useState("");

	const handleChange = e => {
		setInput(e.target.value);
	};

	const inputRef = useRef(null);

	useEffect(() => {
		inputRef.current.focus();
	});

	const handleSubmit = e => {
		e.preventDefault();

		props.onSubmit({
			id: Math.floor(Math.random() * 1000),
			text: input
		});

		setInput("");
	};

	return (
		<form
			className=" custom-container row bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center"
			onSubmit={handleSubmit}>
			<div className=" row align-items-center justify-content-center">
				<div className="col">
					<input
						type="text"
						value={input}
						className="form-control form-control-lg border-0 add-todo-input bg-transparent rounded"
						placeholder="What needs to be done?"
						onChange={handleChange}
						ref={inputRef}
					/>
				</div>

				<div className="col-auto px-0 mx-0 mr-2">
					<button onClick={handleSubmit} type="button" className="btn btn-primary">
						Add
					</button>
				</div>
			</div>
		</form>
	);
}

ToDoForm.propTypes = {
	onSubmit: PropTypes.onSubmit
};

export default ToDoForm;

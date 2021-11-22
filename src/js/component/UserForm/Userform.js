import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

//create your first component

function UserForm(props) {
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
		<form>
			<div className="col">
				<input
					type="text"
					value={input}
					className=" border-0  bg-transparent rounded"
					placeholder="Add User"
					onChange={handleChange}
					ref={inputRef}
				/>
			</div>

			<div className=" px-0 mx-0 mr-2">
				<button onClick={handleSubmit} type="button" className="btn btn-primary">
					Add
				</button>
			</div>
		</form>
	);
}

UserForm.propTypes = {
	onSubmit: PropTypes.func
};

export default UserForm;

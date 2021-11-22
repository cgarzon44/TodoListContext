import React, { useState, useEffect } from "react";

// Don't change, here is where we initialize our context, by default it's just going to be null.
export const Context = React.createContext(null);

export const withGlobalState = ComponentToBeWrapperd => {
	const ComponentToBeReturned = () => {
		const [todos, setTodos] = React.useState([]);
		const [users, setUser] = React.useState([]);

		const removeTodo = id => {
			const removeArr = todos.filter(todo => todo.id !== id);

			setTodos(removeArr);
		};

		const removeUser = id => {
			const removeUser = users.filter(user => user.id !== id);

			setUser(removeUser);
		};

		const addTodo = todo => {
			if (!todo.text || /^\s*$/.test(todo.text)) {
				return;
			}
			const newTodos = [todo, ...todos];

			setTodos(newTodos);
		};

		const addUser = user => {
			if (!user.text || /^\s*$/.test(user.text)) {
				return;
			}
			const newUsers = [user];

			setUser(newUsers);
		};

		const completeTodo = id => {
			let updatedTodos = todos.map(todo => {
				if (todo.id === id) {
					todo.isComplete = !todo.isComplete;
				}
				return todo;
			});
			setTodos(updatedTodos);
		};

		const ContextValue = { todos, users, removeTodo, completeTodo, addTodo, removeUser, addUser };
		return (
			<Context.Provider value={ContextValue}>
				<ComponentToBeWrapperd />
			</Context.Provider>
		);
	};

	return ComponentToBeReturned;
};

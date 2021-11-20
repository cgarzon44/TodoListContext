import React, { useState, useEffect } from "react";

// Don't change, here is where we initialize our context, by default it's just going to be null.
export const Context = React.createContext(null);

export const withGlobalState = ComponentToBeWrapperd => {
	const ComponentToBeReturned = () => {
		const [todos, setTodos] = React.useState("hello");

		return (
			<Context.Provider value={{ todos }}>
				<ComponentToBeWrapperd />
			</Context.Provider>
		);
	};

	return ComponentToBeReturned;
};

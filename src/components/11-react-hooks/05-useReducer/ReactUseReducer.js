import React, { useReducer } from "react";

// Define a global constant object variable:
const ACTIONS = {
	DECREMENT: "decrement",
	INCREMENT: "increment",
};

// Create function that can be used to determine the state change based on passed action argument:
const reducer = (state, action) => {
	switch (action.type) {
		case ACTIONS.DECREMENT:
			return { count: state.count - 1 }; // count property value set to current count value minus 1
		case ACTIONS.INCREMENT:
			return { count: state.count + 1 }; // count property value set to current count value plus 1
		default:
			return state;
	}
};

const ReactUseReducer = () => {
	// Define the component state using the useReducer() hook.
	const [state, dispatch] = useReducer(reducer, { count: 0 });

	const decrement = () => {
		dispatch({ type: ACTIONS.DECREMENT }); // Set the action type action to be passed to the reducer function.
	};

	const increment = () => {
		dispatch({ type: ACTIONS.INCREMENT }); // Set the action type action to be passed to the reducer function.
	};

	return (
		<div>
			<button onClick={decrement}>-</button>
			<span>{state.count}</span>
			<button onClick={increment}>+</button>
		</div>
	);
};

export default ReactUseReducer;

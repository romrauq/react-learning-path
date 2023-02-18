import React, { useReducer } from "react";

const ACTIONS = {
	DECREMENT: "decrement",
	INCREMENT: "increment",
};

const reducer = (state, action) => {
	switch (action.type) {
		case ACTIONS.DECREMENT:
			return { count: state.count - 1 };
		case ACTIONS.INCREMENT:
			return { count: state.count + 1 };
		default:
			return state;
	}
};

const ReactUseReducer = () => {
	const [state, dispatch] = useReducer(reducer, { count: 0 });

	const decrement = () => {
		dispatch({ type: ACTIONS.DECREMENT });
	};

	const increment = () => {
		dispatch({ type: ACTIONS.INCREMENT });
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

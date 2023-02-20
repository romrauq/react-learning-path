import React, { useState } from "react";

const ReactPrevState = () => {
	// function getState() {
	// 	console.log("useState had been run!");
	// 	return 4;
	// }

	// const [count, setCount] = useState(getState()); // The direct definition of the state sets the useState() to be run every time the state value is changed.

	// Function definition of state value sets useState() function to run only once:
	const [count, setCount] = useState(() => {
		console.log("useState had been run!");
		return 4;
	});

	const decreaseFunction = () => {
		// setCount(count - 1);
		setCount((prevCount) => prevCount - 1);
	};

	const increaseFunction = () => {
		// setCount(count + 1);
		setCount((prevCount) => prevCount + 1);
	};

	return (
		<div>
			<button onClick={decreaseFunction}>Decrease</button>
			<p>{count}</p>
			<button onClick={increaseFunction}>Increase</button>
		</div>
	);
};

export default ReactPrevState;

import React, { useState } from "react";

const FunctionStateChange = () => {
	const [count, setCount] = useState(0);

	const increment = () => {
		setCount(count + 1);
	};

	const decrement = () => {
		setCount(count - 1);
	};

	return (
		<div>
			<p>Our number is: {count}</p>
			<button onClick={increment}>Increase Number</button>
			<button onClick={decrement}>Decrease Number</button>
		</div>
	);
};

export default FunctionStateChange;

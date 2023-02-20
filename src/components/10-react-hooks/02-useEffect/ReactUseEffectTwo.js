import React, { useState, useEffect } from "react";

const ReactUseEffectTwo = () => {
	const [count, setCount] = useState(0);
	const [formula, setFormula] = useState(0);

	console.log("Component Mounted!");
	useEffect(() => {
		console.log("useEffect() was run!");
		setFormula(() => count * 5);
	}, [count]); // The useEffect hook is dependent on the ${count} variable.
	// If the ${count} variable changes, the script within the useEffect() function will be run and the component rerendered.

	return (
		<div>
			<p>Count: {count}</p>
			<button onClick={() => setCount((c) => c + 1)}> Addition</button>
			<button onClick={() => setCount((c) => c - 1)}>Subtraction</button>
			<p>Calculation: {formula}</p>
		</div>
	);
};

export default ReactUseEffectTwo;

import React, { useState, useEffect } from "react";

const ReactUseEffectTwo = () => {
	const [count, setCount] = useState(0);
	const [formula, setFormula] = useState(0);

	useEffect(() => {
		setFormula(() => count * 5);
	}, [count]); // This useEffect hook is dependent on the ${count} variable.
	// If the ${count} variable updates, the effect will run again.

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

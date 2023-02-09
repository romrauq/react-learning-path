import React, { useState, useEffect } from "react";

const ReactUseEffectCleanup = () => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		let timer = setTimeout(() => {
			setCount((count) => count + 1);
		}, 1000);

		return () => clearTimeout(timer); // Cleans up the timer at the end of the useEffect Hook
	}, []);
	return (
		<div>
			<p>I have rendered {count} times.</p>
		</div>
	);
};

export default ReactUseEffectCleanup;

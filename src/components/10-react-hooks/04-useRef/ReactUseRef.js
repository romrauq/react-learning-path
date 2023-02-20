import React, { useState, useEffect, useRef } from "react";

// If we tried to count how many times our application renders using the useState Hook,
// we would be caught in an infinite loop since this Hook itself causes a re - render.
// To avoid this, we can use the useRef Hook.

const ReactUseRef = () => {
	const [name, setName] = useState("");
	const renderCount = useRef(0); // returns {current: 0}

	useEffect(() => {
		renderCount.current = renderCount.current + 1;
	}, [name]);

	return (
		<div>
			<label>
				Enter your name
				<input
					type="text"
					onChange={(e) => {
						setName(e.target.value);
					}}
				/>
			</label>
			<p>My name is {name}</p>
			<p>
				This component has been rendered {renderCount.current}{" "}
				{renderCount.current <= 1 ? "time" : "times"}
			</p>
		</div>
	);
};

export default ReactUseRef;

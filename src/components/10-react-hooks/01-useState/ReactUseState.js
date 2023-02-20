// At the top of the component, import the useState Hook.
// We destructured useState from react as it is a named export
import React, { useState } from "react";

const ReactUseState = () => {
	// initialize our state by calling useState:
	// useState accepts an initial state and returns two values a current state and a function to udate the state value:
	const [color, setColor] = useState("red");
	return (
		<div>
			<p>My favourite color is {color}</p>
			<button onClick={() => setColor("red")}>Red</button>
			<button onClick={() => setColor("orange")}>Orange</button>
			<button onClick={() => setColor("yellow")}>Yellow</button>
			<button onClick={() => setColor("green")}>Green</button>
			<button onClick={() => setColor("blue")}>Blue</button>
			<button onClick={() => setColor("violet")}>Violet</button>
		</div>
	);
};

export default ReactUseState;

import React from "react";
import { useState } from "react";

const ReactEvents = () => {
	const [clicked, setClicked] = useState("not been clicked.");

	let handleClick = () => {
		setClicked("been clicked.");
	};

	return (
		<div>
			<p>The button has {clicked}</p>
			<button onClick={handleClick}>Click Me</button>
		</div>
	);
};

export default ReactEvents;

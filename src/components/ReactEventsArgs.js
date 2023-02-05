import React, { useState } from "react";

const ReactEventsArg = () => {
	const [inputValue, setInputValue] = useState("");
	const handleChange = (e) => {
		setInputValue(e.target.value);
	};
	const handleClick = (args) => {
		alert(args);
	};
	return (
		<div>
			<input type="text" name="" id="" onChange={handleChange} />
			<p>React event with an argument</p>
			<button
				onClick={() => {
					handleClick(inputValue);
				}}
			>
				Click Me!
			</button>
		</div>
	);
};

export default ReactEventsArg;

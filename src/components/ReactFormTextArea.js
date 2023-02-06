import React, { useState } from "react";

const ReactFormTextArea = () => {
	const [inputValue, setInputValue] = useState("");

	const handleChange = (e) => {
		setInputValue(e.target.value);
	};

	const handleClick = () => {
		console.log(inputValue);
	};

	return (
		<div>
			<textarea value={inputValue} onChange={handleChange} />
			<button onClick={handleClick}>Click Me!</button>
		</div>
	);
};

export default ReactFormTextArea;

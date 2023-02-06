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
			<form>
				<textarea value={inputValue} onChange={handleChange} />
				<button onClick={handleClick}>Click Me!</button>
			</form>
		</div>
	);
};

export default ReactFormTextArea;

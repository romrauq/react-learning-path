import React, { useState } from "react";

const FunctionStateChangeTwo = () => {
	const [username, setUsername] = useState("Johann Liebert");
	const [inputValue, setInputValue] = useState("");

	const handleChange = (e) => {
		// console.log("Input changed!");
		setInputValue(e.target.value);
	};

	const handleClick = () => {
		// console.log("Button clicked");
		setUsername(inputValue);
	};

	return (
		<div>
			<p>My name is {username}</p>
			<input
				type="text"
				name=""
				id=""
				value={inputValue}
				placeholder="Enter your new name value here"
				onChange={handleChange}
			/>
			<button onClick={handleClick}>Edit Name</button>
		</div>
	);
};

export default FunctionStateChangeTwo;

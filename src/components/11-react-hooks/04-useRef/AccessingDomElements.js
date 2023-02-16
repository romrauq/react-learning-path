import React, { useState, useRef, useEffect } from "react";

const AccessingDomElements = () => {
	const [name, setName] = useState("");
	const inputElement = useRef(); // Defined a reference variable.

	useEffect(() => {
		console.log(`Component has been rendered!`);
	}, [name]);

	const focusElement = () => {
		inputElement.current = inputElement.current.focus();
	};

	return (
		<div>
			<label>
				Enter your name:
				<input ref={inputElement} type="text" onChange={(e) => setName(e.target.value)} />
			</label>

			<button onClick={focusElement}>Focus</button>
			<p>Your name is {name}</p>
		</div>
	);
};

export default AccessingDomElements;

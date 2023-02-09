import React, { useState } from "react";

const ReactUseStateObject = () => {
	const [person, setPerson] = useState({
		name: "Jack Smith",
		age: "32",
		occupation: "Medical Surgeon",
		married: false,
	});
	return (
		<div>
			<p>Hello, my name is {person.name}.</p>
			<p>I am {person.age} years old.</p>
			<p>I work as a {person.occupation}</p>
			<p>{person.married ? "I am married." : "I am not married."}</p>
		</div>
	);
};

export default ReactUseStateObject;

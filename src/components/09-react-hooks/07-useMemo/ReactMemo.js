import React, { useState } from "react";

// Any time the increment button is clicked, the Todos components is re-rendered.
// This could cause performance issues if the component was more complex.
const ToDos = ({ todos }) => {
	console.log(`The "Todos" component was rendered!`);
	return (
		<div>
			<h1>My Todos</h1>
			{todos.map((todo, index) => {
				return <p key={index}>{todo}</p>;
			})}
		</div>
	);
};

const ReactMemo = () => {
	let [count, setCount] = useState(0);
	let [todos] = useState(["todo item 1", "todo item 2"]);

	const increment = () => {
		setCount(count + 1);
	};

	return (
		<div>
			<ToDos todos={todos} />
			<hr />
			<div>
				Count: {count}
				<button onClick={increment}>Increase Count</button>
			</div>
		</div>
	);
};

export default ReactMemo;

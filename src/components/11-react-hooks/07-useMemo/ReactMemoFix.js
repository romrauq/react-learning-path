import React, { useState, memo } from "react";

// Use the `React.memo` higher-order component to prevent this component from re-rendering whenever the button in ReactMemoFix is clicked:
const TodoList = memo(({ todos }) => {
	console.log(`The "Todos" component was rendered!`);
	return (
		<div>
			<h1>Todos List:</h1>
			{todos.map((todo, index) => {
				return <p key={index}>{todo}</p>;
			})}
		</div>
	);
});

const ReactMemoFix = () => {
	const [count, setCount] = useState(0);
	const [todos, setTodos] = useState(["Clean Sneakers", "Wash Car"]);

	const increment = () => {
		setCount(count + 1);
	};

	return (
		<div>
			<TodoList todos={todos} />
			<p>Count: {count}</p>
			<button onClick={increment}>Increase</button>
		</div>
	);
};

export default ReactMemoFix;

import React from "react";

// Conditonal rendering using the ternary operator:
const ConditionalRenderingTwo = () => {
	let owing = false;
	return (
		<div>
			<p>{owing ? "I owe a lot of money..." : "I do not owe any money."}</p>
		</div>
	);
};
export default ConditionalRenderingTwo;

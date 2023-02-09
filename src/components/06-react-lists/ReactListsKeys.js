import React from "react";

const ReactListKeys = () => {
	let cars = ["BMW", "Mercedes", "Honda", "Toyota", "Nissan"];
	return (
		<div>
			<p>Listed below are different cars:</p>
			<ol>
				{cars.map((car, index) => (
					<li key={index}>{car}</li>
				))}
			</ol>
		</div>
	);
};

export default ReactListKeys;

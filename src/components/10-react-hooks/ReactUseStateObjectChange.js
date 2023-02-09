import React, { useState } from "react";

const ReactUseStateObjectChange = () => {
	const [car, updateCar] = useState({
		name: "Toyota",
		model: "Camry",
		year: "2010",
	});

	const updateModel = () => {
		updateCar((prevState) => {
			return { ...prevState, model: "Navara" };
		});
	};

	return (
		<div>
			<p>
				I drive a {car.year} {car.name} {car.model}
			</p>
			<button onClick={updateModel}>Update Model</button>
		</div>
	);
};

export default ReactUseStateObjectChange;

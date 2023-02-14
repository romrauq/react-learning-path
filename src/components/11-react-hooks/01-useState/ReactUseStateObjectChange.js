import React, { useState } from "react";

const ReactUseStateObjectChange = () => {
	const [car, updateCar] = useState({
		name: "Toyota",
		model: "Camry",
		year: 2010,
	});

	const updateName = () => {
		updateCar((prevState) => {
			return { ...prevState, name: "Mercedes Benz" };
		});
	};

	const updateModel = () => {
		updateCar((prevState) => {
			return { ...prevState, model: "M Series" };
		});
	};

	const updateYear = () => {
		updateCar((prevState) => {
			return { ...prevState, year: 2023 };
		});
	};

	return (
		<div>
			<p>
				I drive a {car.year} {car.name} {car.model}
			</p>
			<button onClick={updateName}>Update Name</button>
			<button onClick={updateModel}>Update Model</button>
			<button onClick={updateYear}>Update Year</button>
		</div>
	);
};

export default ReactUseStateObjectChange;

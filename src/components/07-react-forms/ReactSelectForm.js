import React from "react";
import { useState } from "react";

const ReactFormSelect = () => {
	const [selected, setSelected] = useState("America");

	const handleChange = (e) => {
		setSelected(e.target.value);
	};

	const handleClick = (e) => {
		e.preventDefault();
		console.log(selected);
	};

	return (
		<div>
			<form>
				{" "}
				Select country
				<label htmlFor="">
					<select value={selected} onChange={handleChange}>
						<option value="America">America</option>
						<option value="Russia">Russia</option>
						<option value="China">China</option>
						<option value="United Kingdon">United Kingdom</option>
						<option value="France">France</option>
						<option value="Pakistan">Pakistan</option>
						<option value="India">India</option>
					</select>
				</label>
				<button onClick={handleClick}>Click Me!</button>
			</form>
		</div>
	);
};

export default ReactFormSelect;

import React, { useState } from "react";

const ReactFormMultipleFields = () => {
	const [inputValues, setInputValues] = useState({});

	// We use the same event handler function for both input fields,
	// we could write one event handler for each,
	// but script within "handleChange" below gives us much cleaner code and is the preferred way in React.
	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setInputValues((values) => ({ ...values, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(inputValues.fullname, inputValues.username, inputValues.occupation);
	};

	return (
		<div>
			<form>
				<label>
					Full Name
					<input type="text" name="fullname" onChange={handleChange} />
				</label>
				<label>
					Username
					<input type="text" name="username" onChange={handleChange} />
				</label>
				<label>
					Occupation
					<input type="text" name="occupation" onChange={handleChange} />
				</label>
				<input type="submit" value="Submit Details" onClick={handleSubmit} />
			</form>
		</div>
	);
};

export default ReactFormMultipleFields;

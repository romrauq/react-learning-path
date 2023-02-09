import React, { useState } from "react";

const SubmitForm = () => {
	const [username, SetUserame] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		alert(`Submitting the name value: ${username}`);
	};

	return (
		<div>
			<form action="">
				<label>
					<input type="text" onChange={(e) => SetUserame(e.target.value)} />
					<input type="submit" value="SUMBIT NAME" onClick={handleSubmit} />
				</label>
			</form>
		</div>
	);
};

export default SubmitForm;
